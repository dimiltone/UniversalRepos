import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RepositoryPackageStore, RepositoryPackageState } from './repository-package.store';
import { Package } from 'src/app/shared/models/package.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryPackageQuery extends QueryEntity<RepositoryPackageState, Package> {
  active$: Observable<Package> = this.selectActive() as Observable<Package>;

  constructor(protected store: RepositoryPackageStore) {
    super(store);
  }

}
