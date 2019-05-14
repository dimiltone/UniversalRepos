import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, Store } from '@datorama/akita';
import { ImportRepositoryProgressionState } from './import-repository-progression.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'importRepositoryProgression', resettable: true })
export class ImportRepositoryProgressionStore extends Store<ImportRepositoryProgressionState> {

  constructor() {
    super({started: false});
  }

}

