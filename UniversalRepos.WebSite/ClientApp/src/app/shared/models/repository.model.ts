import { ID } from '@datorama/akita';

export interface Repository {
  id: ID;
  name: string;
  description: string;
  url: string;
  isPublic: boolean;
  repositoryType: string;
  repositoryTypeId: number;
  importedPackages: number;
}
export function createRepository(params: Partial<Repository>) {
  return {

  } as Repository;
}
