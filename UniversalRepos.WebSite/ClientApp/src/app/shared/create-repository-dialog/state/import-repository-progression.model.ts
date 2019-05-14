import { ID } from '@datorama/akita';

export interface ImportRepositoryProgressionState {
  id: ID;
  total: number;
  inProgress: number;
  started: boolean;
  repositoryType: string;
  finished: boolean;
  packagesId: number[];
}

/**
 * A factory function that creates ImportRepositoryProgression
 */
export function createImportRepositoryProgression(params: Partial<ImportRepositoryProgressionState>) {
  return {

  } as ImportRepositoryProgressionState;
}
