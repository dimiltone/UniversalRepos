import { ImportRepositoryProgressionService } from './../../../shared/create-repository-dialog/state/import-repository-progression.service';
import { ImportRepositoryProgressionQuery } from './../../../shared/create-repository-dialog/state/import-repository-progression.query';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import {MatDialog} from '@angular/material';
import {CreateRepositoryDialogComponent} from '../../../shared/create-repository-dialog/create-repository-dialog.component';
import { ToasterService } from '@core/animations/toaster.service';
import { Observable } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  // isAuthenticated$ = this.authQuery.isAuthenticated$;
  applicatioName = environment.applicationName;
  logo = require('../../../../assets/logo.png');
  // userName$ = this.authQuery.userName$;
  drawerOpened = false;
  nextLocation: string;
  actualLocation: string;
  theme: 'default-theme' | 'black-theme';
  importStarted$ = this.importQuery.select(x => x.started);
  toImportPackages$ = this.importQuery.select(x => x);

  startedImport = false;

  @Output() sideNav = new EventEmitter<boolean>();
  @Output() drawer = new EventEmitter<boolean>();
  @Output() themeChanged = new EventEmitter<string>();
  constructor(private location: Location,
    private importQuery: ImportRepositoryProgressionQuery,
    private importService: ImportRepositoryProgressionService,
    private toasterService: ToasterService,
    private dialog: MatDialog) {
    if (LocalStorageService.getItem('theme')) {
      this.theme = LocalStorageService.getItem('theme');
    } else {
      this.theme = 'default-theme';
    }
  }

  ngOnInit(): void {
    this.importStarted$.subscribe(x => {
      if (x && !this.startedImport) {
        this.toasterService.loadComponent();
      }
      this.startedImport = x;
    });

    this.toImportPackages$.subscribe(x => {
      if (x && x.packagesId && x.packagesId.length > 0 && x.started) {
        const notifyDialog =  this.toasterService.loadComponent();
        notifyDialog.instance.totalValue = x.packagesId.length;
        notifyDialog.instance.message = 'Import en cours';
        notifyDialog.instance.finished = 'Import Terminé';
        notifyDialog.instance.closed.subscribe(x => notifyDialog.dismiss());

        x.packagesId.forEach(pack => {
          this.importService.importPackageVersions(pack, x.repositoryType)
            .subscribe(() => notifyDialog.instance.progression$.next(1));
        });
      }
    });
  }
  onLogOutClick() {
    // this.authService.logout();
  }
  onThemeToggle() {
    if (this.theme === 'default-theme') {
      this.theme = 'black-theme';
    } else {
      this.theme = 'default-theme';
    }
    this.themeChanged.next(this.theme);
  }
  previousClick() {
    this.nextLocation = this.location.path();
    this.location.back();
  }
  nextClick() {
    this.location.forward();
  }
  openSideNav() {
    this.sideNav.emit(true);
  }

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
    this.drawer.emit(this.drawerOpened);
  }
  onCreationClick() {
    this.dialog.open(CreateRepositoryDialogComponent, {
      width: '50%'
    });
  }
}
