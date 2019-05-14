import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { NugetPackageStore } from './nuget-package.store';
import { NugetPackage } from './nuget-package.model';
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class NugetPackageService {

  constructor(private nugetPackageStore: NugetPackageStore,
              private http: HttpClient) {
  }

  getAllByPackageId(id: number) {
    this.http.get<NugetPackage[]>(`${environment.apiUrl}/nuget/package/${id}`)
      .subscribe((entities) => this.nugetPackageStore.set(entities));
  }
  synchroniseVersions(id: number) {
    return this.http.post(`${environment.apiUrl}/nuget/package/${id}/import-versions`, null);
  }
  downloadFile(url: string): Observable<ArrayBuffer> {
    return this.http.get(url , {
      responseType: 'arraybuffer'
    });
  }
}
