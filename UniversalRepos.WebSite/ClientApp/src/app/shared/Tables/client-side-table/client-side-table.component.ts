import { ToasterService } from './../../../core/animations/toaster.service';
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from "../../base-component/base-component.component";
import {routeAnimations} from "@core/animations/route.animations";
import {fadeInAnimation} from "@core/animations/fadeIn.animations";
import {expandedAnimation} from "@core/animations/expanded.animation";
import {ButtonColumn, ButtonStyle, Column, ColumnTypes, RouterLinkColumn} from "../column.model";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-client-side-table',
  templateUrl: './client-side-table.component.html',
  styleUrls: ['./client-side-table.component.scss'],
  animations: [routeAnimations, fadeInAnimation, expandedAnimation]
})
export class ClientSideTableComponent extends BaseComponent implements OnInit {
  ColumnTypes = ColumnTypes;
  ButtonStyle = ButtonStyle;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() create: boolean;
  @Input() expandable = false;
  @Input() loading = false;
  @Input() multiSelect = false;

  @Output() createClick = new EventEmitter<boolean>(true);

  expandedElement: any | null;
  expandableColumnNames  = new Array<string>();

  @Input('columns') set columns(values: Column[]) {
    this.displayedColumns = values;
    this.UpdateDisplayedColumns();
  }
  @Input('expandableColumns') set expandableColumns(values: Column[]) {
    this.displayedExpandableColumns = values;
    this.UpdateDisplayedColumns();
  }
  @Input('results') set results(values: any[]) {
    if (values) {
      this.dataSource = new MatTableDataSource<any>(values);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filter = this.filter;
    }
  }
  displayedColumns: Column[];
  displayedExpandableColumns: Column[];
  displayedColumnNames = new Array<string>();
  initialized = false;
  @Input() invisibleColumns: string[];
  filter: string;
  dataSource: MatTableDataSource<any>;
  @Input() sortDirection: 'asc' | 'desc';
  @Input() sortColumn: string;
  initialSelection = [];
  selection = new SelectionModel<any>(true, this.initialSelection);
  @Output() selectionEvent = this.selection.changed;

  constructor(toasterService: ToasterService) {
    super(toasterService);
  }
  expanded(row: any): boolean {
    if (this.expandedElement) {
      return row['id'] === this.expandedElement['id'];
    }
    return false;
  }
  ngOnInit() {
    if (this.multiSelect) {
      this.displayedColumnNames.unshift('select');
    }
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.filter = filterValue;
    this.dataSource.filter = filterValue;
  }
  UpdateExpandableColumns() {
    if (this.expandable && this.expandableColumns) {
      this.expandableColumnNames = this.expandableColumns.map(x => x.id);
    }
  }
  private UpdateDisplayedColumns() {
    this.displayedColumnNames = this.displayedColumns.map(x => x.id);
  }
  getButtonColumn(value: string): ButtonColumn {
    return this.displayedColumns.find(x => x.id === value) as ButtonColumn;
  }
  getButtonLinkColumn(value: string): RouterLinkColumn {
    return this.displayedColumns.find(x => x.id === value) as RouterLinkColumn;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
