import { Component, OnInit, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-progression-snack-bar',
  templateUrl: './progression-snack-bar.component.html',
  styleUrls: ['./progression-snack-bar.component.scss']
})
export class ProgressionSnackBarComponent implements OnInit {
  totalValue = 0;
  progression = 0;
  message: string;
  percent = 0;
  progression$ = new BehaviorSubject(0);
  finished = 'Terminé';
  isFinished = false;
  closed = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    this.progression$.subscribe(x => {
      console.warn(x);
      if (this.totalValue > 0) {
        const singleValue = 100 / this.totalValue * x;
        this.percent = this.percent + singleValue;
        this.progression = this.progression + x;
        if (this.progression >= this.totalValue) {
          this.isFinished = true;
        }
      }
    });
  }
  finish() {
    this.progression = this.totalValue;
  }
  onClick() {
    this.closed.emit(true);
  }
}
