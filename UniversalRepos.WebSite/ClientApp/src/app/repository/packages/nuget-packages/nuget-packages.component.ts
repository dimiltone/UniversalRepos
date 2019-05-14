import { BaseComponent } from 'src/app/shared/base-component/base-component.component';
import { RepositoryPackageQuery } from './../state/repository-package.query';
import { Component, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ToasterService } from '@core/animations/toaster.service';
import { NugetPackageService } from './state/nuget-package.service';
import { NugetPackageQuery } from './state/nuget-package.query';
import {NugetPackage} from "./state/nuget-package.model";

@Component({
  selector: 'app-nuget-packages',
  templateUrl: './nuget-packages.component.html',
  styleUrls: ['./nuget-packages.component.scss']
})
export class NugetPackagesComponent extends BaseComponent implements OnInit {
  activePackageId$ = this.packagesQuery.selectActiveId();
  results$ = this.nugetPackageQuery.selectAll();

  orderedResults: NugetPackage[];
  constructor(private packagesQuery: RepositoryPackageQuery,
    private nugetPackageService: NugetPackageService,
    private nugetPackageQuery: NugetPackageQuery,
    toasterService: ToasterService) {
      super(toasterService);
      this.activePackageId$.pipe(untilDestroyed(this))
        .subscribe(x => {
          if (x) {
            this.nugetPackageService.getAllByPackageId(x);
          }
        });
  }
  downloadPackage(response: Response) {

  }
  download(nugetPackage: NugetPackage) {
    this.nugetPackageService.downloadFile(nugetPackage.contentUrl).subscribe(x => {

      const blob = new Blob([x], {
        type: nugetPackage.contentType
      });

    });
  }
  ngOnInit() {
    this.results$.pipe(untilDestroyed(this))
      .subscribe(x => {
        if (x) {
          this.orderedResults = x.sort((a,b) => b.normalizedVersion.localeCompare(a.normalizedVersion));
        } else {
          this.orderedResults = null;
        }
      });
  }
  onImportClick(repoPackage: number) {
    this.nugetPackageService.synchroniseVersions(repoPackage)
      .subscribe(x => {
        this.nugetPackageService.getAllByPackageId(repoPackage);
      });
  }
}
