import { RouterLinkColumn, ButtonStyle } from './../../../shared/Tables/column.model';
import { BaseComponent } from 'src/app/shared/base-component/base-component.component';
import { RepositoryPackageQuery } from './../state/repository-package.query';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from '@core/animations/toaster.service';
import { Column, ColumnTypes } from 'src/app/shared/Tables/column.model';

@Component({
  selector: 'app-package-lists',
  templateUrl: './package-lists.component.html',
  styleUrls: ['./package-lists.component.scss']
})
export class PackageListsComponent extends BaseComponent implements OnInit {
  columns = new Array<Column>(
    new Column('Nom', 'name', null, ColumnTypes.medium),
    new Column('Description', 'description'),
    new Column('Version', 'version', null, ColumnTypes.short),
    new Column('Publication', 'publicationDate', null, ColumnTypes.date),
    new Column('Télécharger', 'downloadUrl', null, ColumnTypes.url),
    new Column('Lien', 'infoUrl', null, ColumnTypes.url),
    new RouterLinkColumn('', 'id', '/repos/package', ButtonStyle.stroked_info, 'infos_outline', 'id', 'Détails')
  );
  packages$ = this.packagesQuery.selectAll();

  constructor(private packagesQuery: RepositoryPackageQuery,
    toasterService: ToasterService) {
      super(toasterService);
     }

  ngOnInit() {
  }

}
