import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatTabsModule,
  MatInputModule,
  MatDialogModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatExpansionModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatBadgeModule,
  MatListModule,
  MatMenuModule,
  MatStepperModule,
  MatTooltipModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTableModule,
  MatGridListModule,
  MatPaginatorModule,
  MatSortModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTreeModule,
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientSideTableComponent } from './Tables/client-side-table/client-side-table.component';
import {RouterModule} from '@angular/router';
import { DateTimePipe } from './pipes/date-time.pipe';
import {LinkyModule} from 'ngx-linky';
import {CreateRepositoryDialogComponent} from './create-repository-dialog/create-repository-dialog.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {SelectListComponent} from './SelectList/select-list.component';
import { RepositoryCardComponent } from './repository-card/repository-card.component';
import { ProgressionSnackBarComponent } from './progression-snack-bar/progression-snack-bar.component';
import { DetailsComponent } from './base-component/details/details.component';
import { BooleanPipe } from './pipes/boolean.pipe';
import { StringPipe } from './pipes/string.pipe';
import { OctetPipe } from './pipes/octet.pipe';


@NgModule({
  declarations: [
    ClientSideTableComponent,
    DateTimePipe,
    CreateRepositoryDialogComponent,
    SelectListComponent,
    RepositoryCardComponent,
    ProgressionSnackBarComponent,
    DetailsComponent,
    BooleanPipe,
    StringPipe,
    OctetPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    CommonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatStepperModule,
    MatTooltipModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LinkyModule,
    NgSelectModule
  ],
  exports: [
    RouterModule,
    MatIconModule,
    CommonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatStepperModule,
    MatTooltipModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LinkyModule,
    ClientSideTableComponent,
    CreateRepositoryDialogComponent,
    NgSelectModule,
    SelectListComponent,
    RepositoryCardComponent,
    DetailsComponent
  ],
  entryComponents: [ CreateRepositoryDialogComponent, ProgressionSnackBarComponent]
})
export class SharedModule { }
