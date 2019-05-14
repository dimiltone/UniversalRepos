import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Package } from 'src/app/shared/models/package.model';


export interface RepositoryPackageState extends EntityState<Package> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'repositoryPackage' })
export class RepositoryPackageStore extends EntityStore<RepositoryPackageState, Package> {

  constructor() {
    super();
  }

}

