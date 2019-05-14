import { Component, OnInit, Input } from '@angular/core';
import { Field } from './field.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() element: any;
  @Input() fields: Field[];

  constructor() { }

  ngOnInit() {
  }
}
