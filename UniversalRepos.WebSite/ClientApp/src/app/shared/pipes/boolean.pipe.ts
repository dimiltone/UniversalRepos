import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: boolean) {
    return `<mat-checkbox [checked]="value" disabled="disabled"></mat-checkbox>`;
  }

}
