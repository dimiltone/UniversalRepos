import { Injectable } from '@angular/core';
import { LOGLEVEL, CreateLog, LOGTYPE } from './log.model';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToasterService } from '@core/animations/toaster.service';
import * as StackTraceParser from 'error-stack-parser';
import { PropertyValidationError, ValidationError } from '@core/errors/validation-error';
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  userName = null;
  active = false;
  level: LOGLEVEL = environment.environment === 'Development' ? LOGLEVEL.INFO :  LOGLEVEL.WARN;
  constructor(private toasterService: ToasterService) {

  }

  private sendLog(message: string, level: LOGLEVEL) {
    const log = CreateLog({ logLevel: LOGLEVEL[level], message });
  }
  public info(message: string, type: LOGTYPE = LOGTYPE.INFO) {
    if (environment.environment === 'Development' || this.level <= LOGLEVEL.INFO) {
      console.log(`[${LOGTYPE[type]}]`, message);
      this.sendLog(message, LOGLEVEL.INFO);
    }
  }
  public debug(message: string, type: LOGTYPE) {
    if (environment.environment === 'Development' || this.level <= LOGLEVEL.DEBUG) {
      console.log(`[${LOGTYPE[type]}]`, message);
      this.sendLog(message, LOGLEVEL.DEBUG);
    }
  }

  public warn(message: string) {
    if (environment.environment === 'Development' || this.level <= LOGLEVEL.WARN) {
      console.warn('[WARN]', message);
      this.sendLog(message, LOGLEVEL.WARN);
    }
  }

  public error(error: Error | HttpErrorResponse) {
    console.warn({error});
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        this.httpError(error);
      } else if (error.status === 406) {
        this.validationError(error);
      } else {
        this.httpError(error);
      }
    } else {
      if (!error) {
        return;
      }
      const message = `${error.name} - ${error.message}`;
      const loggingMessage = `[Message] ${message} - [Stack] ${StackTraceParser.parse(error)}`;
      console.error('[ERROR]', { loggingMessage });
      this.toasterService.notifyError(`${message}`);
      this.sendLog(message, LOGLEVEL.ERROR);
    }
  }
  private GetMessageFromValidationErrors(errors: PropertyValidationError[]): string {
    let message = '';
    errors.forEach(element => {
      message += `Property ${element.Property} => `;
      element.Errors.forEach(x => {
        message += x.ErrorCode ? `${x.ErrorCode} : ` : '';
        message += x.Error;
      });
    });
    return message;
  }
  public httpError(response: HttpErrorResponse) {
    let message = null;
    if (!navigator.onLine) {
      message = `Serveur hors-ligne - ${response.message}`;
    } else {
      if (response && response.status === 406 && response.error.errors) {
        message = this.GetMessageFromValidationErrors(response.error.errors);
      } else if (response.error && response.error.error) {
        message = response.error.error;
      } else {
        message = response.message;
      }
    }
    const finalMessage = `[Statut] - ${response.status} - [MESSAGE] - ${message}`;
    console.error('[ERROR]', finalMessage);
    this.toasterService.notifyError(`Status ${response.status} - ${message}`);
    this.sendLog(finalMessage, LOGLEVEL.ERROR);
  }
  public validationError(error: HttpErrorResponse) {
    if (error.error && error.error.errors) {
      const validationErrors: PropertyValidationError[] = error.error.errors;
      let validationmessage = null;
      validationErrors.forEach(x => {
        if (validationmessage) {
          validationmessage = `${validationmessage} - ${this.GetMessage(x)}`;
        } else {
          validationmessage = `${this.GetMessage(x)}`;
        }
      });
      const finalMessage = `[Statut] - ${error.status} - [MESSAGE] - ${validationmessage}`;
      console.error('[ERROR]', finalMessage);
      this.toasterService.notifyError(`Status ${error.status} - ${validationmessage}`);
      this.sendLog(finalMessage, LOGLEVEL.ERROR);
    } else {
      this.httpError(error);
    }
  }
  GetMessage(validationError: PropertyValidationError): string {
    let message: string;
    message = `${validationError.Property}`;
    validationError.Errors.forEach(err => {
      message = `${message} - ${err.ErrorCode}: ${err.Error}`;
    });

    return message;
  }
  public httpLog(response: HttpResponse<any>) {
    const message = `${JSON.stringify(response.body)}`;
    console.log(`[${LOGTYPE[LOGTYPE.HTTP]}]`, `[DEBUG] [Statut] ${response.status} - ${message}`);
    this.sendLog(message, LOGLEVEL.DEBUG);
  }
}
