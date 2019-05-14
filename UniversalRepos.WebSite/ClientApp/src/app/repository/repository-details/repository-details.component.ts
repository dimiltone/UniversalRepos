import { Observable } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RepositoryPackageService } from './../packages/state/repository-package.service';
import { ImportRepositoryProgressionQuery } from './../../shared/create-repository-dialog/state/import-repository-progression.query';
import { ImportRepositoryProgressionService } from './../../shared/create-repository-dialog/state/import-repository-progression.service';
import { RepositoryQuery } from './../state/repository.query';
import { RepositoryService } from './../state/repository.service';
import { ToasterService } from './../../core/animations/toaster.service';
import { Repository } from 'src/app/shared/models/repository.model';
import { BaseComponent } from 'src/app/shared/base-component/base-component.component';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent extends BaseComponent implements OnInit {
  repositoryId: number;
  repository$: Observable<Repository> = this.repositoryQuery.active$;
  count: number;
  importCount$ = this.importQuery.select(x => x.total);
  importCount = 0;
  constructor(private route: ActivatedRoute,
    private repositoryService: RepositoryService,
    private repositoryQuery: RepositoryQuery,
    private importService: ImportRepositoryProgressionService,
    private importQuery: ImportRepositoryProgressionQuery,
    private packagesService: RepositoryPackageService,
    toasterService: ToasterService) {
      super(toasterService);
      this.repository$.pipe(untilDestroyed(this))
        .subscribe(async x => {
        if (x) {
          this.count = await this.repositoryService.countPackagesByRepository(x.repositoryType, +x.id);
          this.importCount = x.importedPackages;
          this.packagesService.getPackagesByRepository(this.repositoryId);
        }
      });
    }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.repositoryId = params['id'];
      this.repositoryService.getById(this.repositoryId);
    });
    this.importCount$.pipe(untilDestroyed(this))
      .subscribe(x => {
        if (x && x !== this.importCount) {
          this.importCount = x;
          this.packagesService.getPackagesByRepository(this.repositoryId);
        }
      });
  }
  async onImportClick(repository: Repository) {
    this.importService.startImport(+repository.id, repository.repositoryType);
  }
}
