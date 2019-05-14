import { ID } from '@datorama/akita';

export interface NugetPackage {
  id: ID;
  version: string;
  normalizedVersion: string;
  isPrerelease: boolean;
  title: string;
  authors: string;
  owners: string;
  iconUrl: string;
  licenseUrl: string;
  projectUrl: string;
  downloadCount: number;
  requireLicenseAcceptance: boolean;
  developmentDependency: string;
  description: string;
  summary: string;
  releaseNotes: string;
  published: Date;
  lastUpdated: Date;
  dependencies: string;
  packageHash: string;
  packageHashAlgorithm: string;
  packageSize: number;
  copyright: string;
  tags: string;
  isAbsoluteLatestVersion: boolean;
  isLatestVersion: boolean;
  listed: boolean;
  versionDownloadCount: number;
  minClientVersion: string;
  language: string;
  contentUrl: string;
  contentType: string;
}

/**
 * A factory function that creates NugetPackage
 */
export function createNugetPackage(params: Partial<NugetPackage>) {
  return {

  } as NugetPackage;
}
