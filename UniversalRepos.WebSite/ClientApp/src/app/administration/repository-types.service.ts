import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RepositoryType} from './repository-types/repositoryType.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RepositoryTypesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<RepositoryType[]> {
    return this.http.get<RepositoryType[]>(`${environment.apiUrl}/RepositoryType`);
  }
}
