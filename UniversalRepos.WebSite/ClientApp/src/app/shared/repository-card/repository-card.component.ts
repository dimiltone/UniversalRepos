import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repository } from '../models/repository.model';
import { Observable } from 'rxjs';
import { RepositoryCardService } from './repository-card.service';
import { routeAnimations } from '@core/animations/route.animations';
import { fadeInAnimation } from '@core/animations/fadeIn.animations';
import { BaseComponent } from '../base-component/base-component.component';
import { ToasterService } from '@core/animations/toaster.service';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss'],
  animations: [routeAnimations, fadeInAnimation]
})
export class RepositoryCardComponent extends BaseComponent implements OnInit {
  @Input('repo') set repo(value: Repository) {
    this.repository = value;
    if (value) {
      this.count$ = this.service.countPackagesByRepository(value.repositoryType, +value.id);
    }
  }
  @Input() canDelete = false;
  @Output() askDelete = new EventEmitter<Repository>()
  count = 0;
  count$: Observable<number>;
  repository: Repository;
  constructor(private service: RepositoryCardService,
    toasterService: ToasterService) {
      super(toasterService);
     }

  async ngOnInit() {
    if (this.repository) {
      this.count = await this.service.countPackages(this.repository.repositoryType, +this.repository.id);
    }
  }
  onDeleteClick() {
    this.askDelete.emit(this.repository);
  }
}
