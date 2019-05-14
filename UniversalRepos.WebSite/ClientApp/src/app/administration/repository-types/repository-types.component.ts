import { Component, OnInit } from '@angular/core';
import {RepositoryType} from './repositoryType.model';
import {RepositoryTypesService} from '../repository-types.service';
import {Observable} from 'rxjs';
import {BaseComponent} from '../../shared/base-component/base-component.component';
import {Column} from '../../shared/Tables/column.model';
import {fadeInAnimation} from '@core/animations/fadeIn.animations';
import {routeAnimations} from '@core/animations/route.animations';
import { ToasterService } from '@core/animations/toaster.service';

@Component({
  selector: 'app-repository-types',
  templateUrl: './repository-types.component.html',
  styleUrls: ['./repository-types.component.scss'],
  animations: [fadeInAnimation, routeAnimations]
})
export class RepositoryTypesComponent extends BaseComponent implements OnInit {
  repositoryTypes$: Observable<RepositoryType[]>;
  columns = new Array<Column>(
    new Column('Nom', 'name'),
    new Column('Description', 'description')
  );
  constructor(toasterService: ToasterService,
    private repositoryTypeService: RepositoryTypesService) {
    super(toasterService);
    this.repositoryTypes$ = this.repositoryTypeService.getAll();

  }

  ngOnInit() {
  }

}
