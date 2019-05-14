import { ToasterService } from './../../core/animations/toaster.service';
import { DeleteRepositoryDialogComponent } from './../delete-repository-dialog/delete-repository-dialog.component';
import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../state/repository.service';
import { RepositoryQuery } from '../state/repository.query';
import { MatDialog } from '@angular/material';
import { Repository } from 'src/app/shared/models/repository.model';
import { CreateRepositoryService } from 'src/app/shared/create-repository-dialog/create-repository.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { BaseComponent } from 'src/app/shared/base-component/base-component.component';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent extends BaseComponent implements OnInit {
  repositories$ = this.repositoryQuery.selectAll();
  constructor(private repositoryService: RepositoryService,
    private createRepositoryService: CreateRepositoryService,
    toasterService: ToasterService,
    private dialog: MatDialog,
    private repositoryQuery: RepositoryQuery) {
      super(toasterService);
      this.repositoryService.getAll();
      this.createRepositoryService.reload$.pipe(untilDestroyed(this))
        .subscribe(x => this.repositoryService.getAll());
    }

  ngOnInit() {
  }
  onDelete(repository: Repository) {
    const dialog = this.dialog.open(DeleteRepositoryDialogComponent, {
      data: repository,
      width: '30%'
    });

    dialog.afterClosed().subscribe(() => {
      this.repositoryService.getAll();
    });
  }
}
