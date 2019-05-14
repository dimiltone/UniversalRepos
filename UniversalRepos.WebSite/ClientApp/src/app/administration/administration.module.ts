import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { RepositoryTypesComponent } from './repository-types/repository-types.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [RepositoryTypesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
