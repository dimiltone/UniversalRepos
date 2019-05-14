import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Option} from "./Option.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {
  @Input() options: Option[];
  @Input() control: FormControl;
  @Input() placeHolder = 'Select';
  @Output() selectedEvent = new EventEmitter<Option>();
  constructor() { }

  ngOnInit() {
  }
  onChange($event: Option) {
    if (this.control) {
      this.control.setValue($event ? $event.value : null);
    }

    this.selectedEvent.emit($event);
  }
}
