import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RepositoryType} from '../../administration/repository-types/repositoryType.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Option} from './Option.model';

@Injectable({
  providedIn: 'root'
})
export class SelectlistsService {
  constructor(private http: HttpClient) { }

  getRepositoryTypeSelectList(): Observable<Option[]> {
    return this.http.get<RepositoryType[]>(`${environment.apiUrl}/RepositoryType`)
      .pipe(map(x => {
        const options = new Array<Option>();
        x.forEach(o => options.push({value: o.id, label: o.name}));
        return options;
    }));
  }
}
