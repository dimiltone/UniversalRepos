import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImportRepositoryProgressionStore } from './import-repository-progression.store';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ImportRepositoryProgressionService {

  constructor(private importRepositoryProgressionStore: ImportRepositoryProgressionStore,
              private http: HttpClient) {
  }
  startImport(id: number, repositoryType: string) {
    this.http.post<number[]>(`${environment.apiUrl}/${repositoryType}/${id}/import`, null)
      .subscribe(x => {
        if (x) {
          this.importRepositoryProgressionStore.update(state => ({
            ...state,
            started: true,
            finished: false,
            id: id,
            repositoryType: repositoryType,
            inProgress: 0,
            packagesId: x,
            total: x.length
          }));
        }
      });
  }
  countImportedPackages(id: number) {
    this.http.get<number>(`${environment.apiUrl}/${id}/count`).toPromise();
  }
  importPackageVersions(id: number, repositoryType: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${repositoryType}/package/${id}/import-versions`, null);
  }
}
