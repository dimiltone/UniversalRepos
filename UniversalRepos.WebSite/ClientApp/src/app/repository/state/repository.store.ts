import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Repository } from 'src/app/shared/models/repository.model';


export interface RepositoryState extends EntityState<Repository> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'repository' })
export class RepositoryStore extends EntityStore<RepositoryState, Repository> {

  constructor() {
    super();
  }

}

