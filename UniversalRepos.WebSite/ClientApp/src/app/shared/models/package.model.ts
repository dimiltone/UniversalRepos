export interface Package {
  id: number;
  name: string;
  description: string;
  author: string;
  version: string;
  licence: string;
  publicationDate: Date;
  repositoryId: number;
  downloadUrl: string;
  infosUrl: string;
  repositoryType: string;
}
