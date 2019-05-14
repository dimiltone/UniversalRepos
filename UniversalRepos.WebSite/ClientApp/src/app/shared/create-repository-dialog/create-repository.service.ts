import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RepositoryType} from '../../administration/repository-types/repositoryType.model';
import {environment} from '../../../environments/environment';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class CreateRepositoryService {
  reload$ = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  async create(repository: Repository) {
    return this.http.post<Repository>(`${environment.apiUrl}/repository/create`, repository).toPromise();
  }

  testNugetRepository(url: string) {
    return this.http.get<boolean>(`${environment.apiUrl}/nuget/test?url=${url}`);
  }
}
