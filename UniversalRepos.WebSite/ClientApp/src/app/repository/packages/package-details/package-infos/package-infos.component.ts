import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component/base-component.component';
import { ToasterService } from '@core/animations/toaster.service';
import { RepositoryPackageQuery } from '../../state/repository-package.query';
import { Field } from 'src/app/shared/base-component/details/field.model';

@Component({
  selector: 'app-package-infos',
  templateUrl: './package-infos.component.html',
  styleUrls: ['./package-infos.component.scss']
})
export class PackageInfosComponent extends BaseComponent implements OnInit {
  package$ = this.packageQuery.active$;

  fields: Field[] = [
    {id: 'name', label: 'Nom', 'type': 'string' },
    {id: 'description', label: 'Description', 'type': 'string' },
    {id: 'version', label: 'Version', 'type': 'string' },
    {id: 'author', label: 'Auteur', 'type': 'string' },
    {id: 'publicationDate', label: 'Publication', 'type': 'date' },
    {id: 'license', label: 'Licence', 'type': 'string' },
    {id: 'repository', label: 'Repository', 'type': 'string' },
    {id: 'repositoryType', label: 'Type', 'type': 'string' },
    {id: 'infoUrl', label: 'Url', 'type': 'url' }
  ];
  constructor(toasterService: ToasterService,
    private packageQuery: RepositoryPackageQuery) {
    super(toasterService);
   }

  ngOnInit() {
  }

}
