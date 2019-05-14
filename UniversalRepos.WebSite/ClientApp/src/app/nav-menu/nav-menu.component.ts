import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  @Output() closed = new EventEmitter<boolean>();

  close() {
    this.closed.emit(true);
  }
}
