import { Package } from './../../shared/models/package.model';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { RepositoryStore } from './repository.store';
import { Repository } from 'src/app/shared/models/repository.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RepositoryService {

  constructor(private repositoryStore: RepositoryStore,
              private http: HttpClient) {
  }

  getAll() {
    this.http.get<Repository[]>(`${environment.apiUrl}/repository`)
        .subscribe((entities) => this.repositoryStore.set(entities));
  }
  getById(id: number) {
    this.http.get<Repository>(`${environment.apiUrl}/repository/${id}`).subscribe(x => {
      this.repositoryStore.upsert(x.id, x);
      this.repositoryStore.setActive(id);
    });
  }
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/repository/${id}/delete`);
  }
  countPackagesByRepository( type: string, id: number) {
    return this.http.get<number>(`${environment.apiUrl}/${type}/${id}/count`).toPromise();
  }
}
