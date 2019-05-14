import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      console.log('null');
      return ' ';
    } else {
      return value;
    }
  }

}
