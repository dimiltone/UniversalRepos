import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { LoggerService } from "@core/logger/logger.service";
import { tap } from "rxjs/operators";
import { LOGTYPE } from "@core/logger/log.model";
import { environment } from "src/environments/environment";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private logger: LoggerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (environment.environment === "Development") {
      this.logger.debug(
        `[URL] - ${req.url} - [VERB] - ${
          req.method
        } - [BODY] - ${JSON.stringify(req.body)}`,
        LOGTYPE.HTTP
      );
    }
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (environment.environment === "Development") {
              this.logger.httpLog(event);
            }
          }
        },
        (err: any) => {
          console.warn(err);

          if (err instanceof HttpErrorResponse) {
            this.logger.httpError(err);
          }
        }
      )
    );
  }
}
