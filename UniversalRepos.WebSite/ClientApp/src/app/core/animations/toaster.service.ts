import { ProgressionSnackBarComponent } from './../../shared/progression-snack-bar/progression-snack-bar.component';
import { Injectable, Inject } from '@angular/core';
import { MatSnackBarConfig, MatSnackBarRef, MatSnackBar, MAT_SNACK_BAR_DEFAULT_OPTIONS, SimpleSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(@Inject(MAT_SNACK_BAR_DEFAULT_OPTIONS)public config: any, private snackBar: MatSnackBar) {

   }

  notifySuccess(message: string, action?: string): MatSnackBarRef<any> {
    const config: MatSnackBarConfig<any> = new MatSnackBarConfig();
    config.panelClass = 'toaster-success';
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 5000;
    return this.snackBar.open(message, action, config);
  }

  notifyError(message: string): MatSnackBarRef<any> {
    this.config.panelClass = 'toaster-error';
    this.config.verticalPosition = 'top';
    this.config.horizontalPosition = 'right';
    this.config.duration = 30000;
    return this.snackBar.open(message, 'CLOSE', this.config);
  }

  notifyWarning(message: string, action?: string): MatSnackBarRef<any> {
    const config: MatSnackBarConfig<any> = new MatSnackBarConfig();
    config.panelClass = 'toaster-warning';
    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';
    config.duration = 5000;
    return this.snackBar.open(message, action, config);
  }
  notify(message: string, action?: string) {
    const config: MatSnackBarConfig<any> = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    config.duration = 5000;
    config.panelClass = 'notify-snackbar';
    if (action) {
      this.snackBar.open(message, action, config);
    } else {
      this.snackBar.open(message, action, config);
    }
  }

  loadComponent(): MatSnackBarRef<ProgressionSnackBarComponent> {
    const config: MatSnackBarConfig<any> = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    config.panelClass = 'progress-snackbar';
    return this.snackBar.openFromComponent(ProgressionSnackBarComponent, config);
  }
}
