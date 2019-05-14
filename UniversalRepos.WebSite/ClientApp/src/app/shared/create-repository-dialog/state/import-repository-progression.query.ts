import { Injectable } from '@angular/core';
import {  Query } from '@datorama/akita';
import { ImportRepositoryProgressionState } from './import-repository-progression.model';
import { ImportRepositoryProgressionStore } from './import-repository-progression.store';

@Injectable({
  providedIn: 'root'
})
export class ImportRepositoryProgressionQuery extends Query<ImportRepositoryProgressionState> {

  constructor(protected store: ImportRepositoryProgressionStore) {
    super(store);
  }

}
