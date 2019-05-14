import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NugetPackageStore, NugetPackageState } from './nuget-package.store';
import { NugetPackage } from './nuget-package.model';

@Injectable({
  providedIn: 'root'
})
export class NugetPackageQuery extends QueryEntity<NugetPackageState, NugetPackage> {
  active$ = this.selectActive() as Observable<NugetPackage>;
  constructor(protected store: NugetPackageStore) {
    super(store);
  }

}
