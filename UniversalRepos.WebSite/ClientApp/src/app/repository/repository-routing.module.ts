import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { PackageListsComponent } from './packages/package-lists/package-lists.component';
import { NugetPackagesComponent } from './packages/nuget-packages/nuget-packages.component';
import { PackageInfosComponent } from './packages/package-details/package-infos/package-infos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repositories',
    pathMatch: 'full',
  },
  {
    path: 'repositories',
    component: RepositoriesComponent,
    data: {title: 'Repos'},
  },
  {
    path: 'repository/:id',
    component: RepositoryDetailsComponent,
    data: {title: 'Repository'},
    children: [
      {
        path: '',
        redirectTo: 'packages-list',
        data: {title: 'Packages'}
      },
      {
        path: 'packages-list',
        component: PackageListsComponent,
        data: {title: 'Package'},
      }
    ]
  },
  {
    path: 'package/:id',
    component: PackageDetailsComponent,
    data: {title: 'Package'},
    children: [
      {
        path: '',
        redirectTo: 'infos'
      },
      {
        path: 'infos',
        component: PackageInfosComponent,
        data: {title: 'Informations'},
      },
      {
        path: 'nuget',
        component: NugetPackagesComponent,
        data: {title: 'Nugets'},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule { }
