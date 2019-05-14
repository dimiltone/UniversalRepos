import { RepositoryService } from './../state/repository.service';
import { Repository } from 'src/app/shared/models/repository.model';
import { Component, OnInit, Inject } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component/base-component.component';
import { ToasterService } from '@core/animations/toaster.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-repository-dialog',
  templateUrl: './delete-repository-dialog.component.html',
  styleUrls: ['./delete-repository-dialog.component.scss']
})
export class DeleteRepositoryDialogComponent extends BaseComponent implements OnInit {

  repository: Repository;
  constructor(toasterService: ToasterService,
    private dialog: MatDialogRef<DeleteRepositoryDialogComponent>,
    private repositoryService: RepositoryService,
    @Inject(MAT_DIALOG_DATA) public data: Repository) {
    super(toasterService);
    this.repository = data;
   }

  ngOnInit() {
  }
  onNoClick() {
    this.dialog.close();
  }
  onDeleteClick() {
    this.repositoryService.delete(+this.repository.id)
      .subscribe(x => {
        this.toasterService.notifyWarning(`Repository ${this.repository.name} supprimé avec succès`);
        this.dialog.close();
      });
  }
}
