import { CustomValidators } from './../../core/validators/custom.validators';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {SelectlistsService} from "../SelectList/selectlists.service";
import {BaseComponent} from "../base-component/base-component.component";
import {untilDestroyed} from "ngx-take-until-destroy";
import {Option} from "../SelectList/Option.model";
import {Observable} from "rxjs";
import { CreateRepositoryService } from './create-repository.service';
import { Repository } from '../models/repository.model';
import { ToasterService } from '@core/animations/toaster.service';


@Component({
  selector: 'app-create-repository-dialog',
  templateUrl: './create-repository-dialog.component.html',
  styleUrls: ['./create-repository-dialog.component.scss']
})
export class CreateRepositoryDialogComponent extends BaseComponent implements OnInit {
  repositoryCreationForm: FormGroup;
  repositoryTypeSelectList$: Observable<Option[]>;
  canValidate = false;
  selectedRepositoryType: string;
  loading: boolean;
  isError: boolean;
  constructor(private dialogRef: MatDialogRef<CreateRepositoryDialogComponent>,
              private selectListsService: SelectlistsService,
              toasterService: ToasterService,
              private createRepositoryService: CreateRepositoryService) {
    super(toasterService);
    this.repositoryCreationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(255) ]),
      description: new FormControl('', [Validators.required, Validators.maxLength(512)]),
      isPublic: new FormControl(false),
      repositoryTypeId: new FormControl('', Validators.required),
      url: new FormControl('', [Validators.required, CustomValidators.urlValidator])
    });
  }
  onRepositoryTypeSelected(repoType: Option) {
    this.selectedRepositoryType = repoType ? repoType.label : null;
  }

  async onTestClick() {
    this.loading = true;
    console.warn(this.selectedRepositoryType);
    switch (this.selectedRepositoryType) {
      case 'Nuget':
        this.canValidate = await this.createRepositoryService.testNugetRepository(this.repositoryCreationForm.get('url').value).toPromise();
        this.isError = !this.canValidate;
        break;
      default:
        this.canValidate = false;
        break;
    }
    this.loading = false;
  }
  ngOnInit() {
    this.repositoryTypeSelectList$ = this.selectListsService.getRepositoryTypeSelectList();
    this.repositoryCreationForm.valueChanges.pipe(untilDestroyed(this))
      .subscribe(() => {
        this.canValidate = false;
        this.isError = false;
      });
  }
  onNoClick() {
    this.dialogRef.close();
  }
  async onValidate() {
    const repository: Repository = this.repositoryCreationForm.value;
    console.warn(repository);
    const repo = await this.createRepositoryService.create(repository)
    .then(x => {
      this.Success(`Repository ${x.name} créé avec succès !`);
      this.dialogRef.close(true);
      this.createRepositoryService.reload$.emit(true);
    }, err => console.warn(err));

  }
}
