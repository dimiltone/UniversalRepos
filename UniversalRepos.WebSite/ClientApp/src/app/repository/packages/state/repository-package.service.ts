import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { RepositoryPackageStore } from './repository-package.store';
import { environment } from 'src/environments/environment';
import { Package } from 'src/app/shared/models/package.model';


@Injectable({ providedIn: 'root' })
export class RepositoryPackageService {

  constructor(private repositoryPackageStore: RepositoryPackageStore,
              private http: HttpClient) {
  }

  getPackagesByRepository(id: number) {
    this.http.get<Package[]>(`${environment.apiUrl}/repository/${id}/packages`)
      .subscribe(x => this.repositoryPackageStore.set(x));
  }
  getById(id: number) {
    this.http.get<Package>(`${environment.apiUrl}/package/${id}`)
    .subscribe(x => {
      this.repositoryPackageStore.upsert(x.id, x);
      this.repositoryPackageStore.setActive(id);
    });
  }
}
