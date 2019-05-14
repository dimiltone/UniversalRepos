import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NugetPackage} from "../state/nuget-package.model";
import {Field} from "../../../../shared/base-component/details/field.model";

@Component({
  selector: 'app-nuget-package-version-details',
  templateUrl: './nuget-package-version-details.component.html',
  styleUrls: ['./nuget-package-version-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NugetPackageVersionDetailsComponent implements OnInit {
  @Input()  nugetVersion: NugetPackage;

  firstFields: Field[] = [
    {id: 'title', label: 'Nom', type: 'string'},
    {id: 'isPrerelease', label: 'Pré-Version', type: 'boolean'},
    {id: 'versionDownloadCount', label: 'Compteur', type: 'string'},
    {id: 'description', label: 'Desccription', type: 'string'},
    {id: 'summary', label: 'Résumé', type: 'string'},
    {id: 'developmentDependency', label: 'Dev Dépendances', type: 'boolean'},
    {id: 'packageSize', label: 'Taille', type: 'octets'},
    {id: 'contentType', label: 'Type', type: 'string'},
    {id: 'language', label: 'Language', type: 'string'}
  ];
  secondColFields: Field[] = [
    {id: 'authors', label: 'Auteurs', type: 'string'},
    {id: 'owners', label: 'Popriétaire', type: 'string'},
    {id: 'projectUrl', label: 'URL Projet', type: 'url'},
    {id: 'licenseUrl', label: 'URL License', type: 'url'},
    {id: 'requireLicenseAcceptance', label: 'Licence obligatoire', type: 'boolean'},
    {id: 'releaseNotes', label: 'Notes de Version', type: 'string'},
    {id: 'releaseNotes', label: 'Notes de Version', type: 'string'},
    {id: 'copyright', label: 'Copyright', type: 'string'},
    {id: 'lastUpdated', label: 'Mise à jour', type: 'date'},
  ];
  constructor() { }

  ngOnInit() {
  // console.warn(this.nugetVersion);
  }

}
