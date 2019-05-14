import { ActivatedRoute, Params } from '@angular/router';
import { BaseComponent } from 'src/app/shared/base-component/base-component.component';
import { Component, OnInit } from '@angular/core';
import { RepositoryPackageQuery } from '../state/repository-package.query';
import { ToasterService } from '@core/animations/toaster.service';
import { RepositoryPackageService } from '../state/repository-package.service';
import { routeAnimations } from '@core/animations/route.animations';
import { fadeInAnimation } from '@core/animations/fadeIn.animations';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss'],
  animations: [routeAnimations, fadeInAnimation]
})
export class PackageDetailsComponent extends BaseComponent implements OnInit {

  package$ = this.packageQuery.active$;
  packageId: number;
  packageRepositoryType: string;
  links = [
    { value: 'infos', label: 'Informations', count: null}
  ];
  constructor(private packageQuery: RepositoryPackageQuery,
    private packageService: RepositoryPackageService,
    private route: ActivatedRoute,
    toasterService: ToasterService) {
      super(toasterService);
      this.package$.pipe(untilDestroyed(this))
        .subscribe(x => {
          this.packageRepositoryType = x ? x.repositoryType.toLowerCase() : null;
          this.updateLinks();
        });
  }
  updateLinks() {
    if (this.packageRepositoryType) {
      this.links = [
        { value: 'infos', label: 'Informations', count: null},
        { value: this.packageRepositoryType, label: 'Versions', count: null},
      ];
    } else {
      this.links = [
        { value: 'infos', label: 'Informations', count: null}
      ];
    }

  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.packageId = params['id'];
      this.packageService.getById(this.packageId);
    });
  }
}
