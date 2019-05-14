import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SharedModule } from '../shared/shared.module';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { DeleteRepositoryDialogComponent } from './delete-repository-dialog/delete-repository-dialog.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { PackageListsComponent } from './packages/package-lists/package-lists.component';
import { NugetPackagesComponent } from './packages/nuget-packages/nuget-packages.component';
import { PackageInfosComponent } from './packages/package-details/package-infos/package-infos.component';
import { NugetDependencyPipe } from './packages/nuget-packages/models/nuget-dependency.pipe';
import {NugetPackageVersionDetailsComponent} from "./packages/nuget-packages/nuget-package-version-details/nuget-package-version-details.component";
@NgModule({
  declarations: [
    RepositoriesComponent,
    RepositoryDetailsComponent,
    DeleteRepositoryDialogComponent,
    PackageDetailsComponent,
    PackageListsComponent,
    NugetPackagesComponent,
    PackageInfosComponent,
    NugetPackageVersionDetailsComponent,
    NugetDependencyPipe
  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    DeleteRepositoryDialogComponent
  ]
})
export class RepositoryModule { }
