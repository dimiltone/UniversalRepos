import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepositoryTypesComponent} from "./repository-types/repository-types.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repository-type',
    pathMatch: 'full',
  },
  {
    path: 'repository-type',
    component: RepositoryTypesComponent,
    data: {title: 'Types'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
