import { CustomErrorsHandler } from './errors/custom-error.handler';
import { LocalStorageService } from './local-storage/local-storage.service';
import { NgModule, ErrorHandler, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToasterService } from './animations/toaster.service';

@NgModule({
  providers: [
    ToasterService,
    LocalStorageService,
    {provide: ErrorHandler, useClass: CustomErrorsHandler}
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
