// errors-handler.ts
import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { LoggerService } from '@core/logger/logger.service';

@Injectable()
export class CustomErrorsHandler implements ErrorHandler {
     constructor(private injector: Injector) {

    }
  handleError(error: any) {
     // Do whatever you like with the error (send it to the server?)
     // And log it to the console
     const logger = this.injector.get(LoggerService);
     logger.error(error);
  }
}
