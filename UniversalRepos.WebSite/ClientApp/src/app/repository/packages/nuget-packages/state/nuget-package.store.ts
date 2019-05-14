import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { NugetPackage } from './nuget-package.model';

export interface NugetPackageState extends EntityState<NugetPackage> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'NugetPackage' })
export class NugetPackageStore extends EntityStore<NugetPackageState, NugetPackage> {

  constructor() {
    super();
  }

}

