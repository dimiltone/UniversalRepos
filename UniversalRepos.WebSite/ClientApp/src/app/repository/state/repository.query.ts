import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RepositoryStore, RepositoryState } from './repository.store';
import { Repository } from 'src/app/shared/models/repository.model';


@Injectable({
  providedIn: 'root'
})
export class RepositoryQuery extends QueryEntity<RepositoryState, Repository> {
  active$: Observable<Repository> = this.selectActive() as Observable<Repository>;
  constructor(protected store: RepositoryStore) {
    super(store);
  }

}
