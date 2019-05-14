import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryCardService {

  constructor(private http: HttpClient) { }

  async countPackages(type: string, id: number){
    return this.http.get<number>(`${environment.apiUrl}/${type}/${id}/count`).toPromise();
  }

  countPackagesByRepository( type: string, id: number): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/${type}/${id}/count`);
  }
}
