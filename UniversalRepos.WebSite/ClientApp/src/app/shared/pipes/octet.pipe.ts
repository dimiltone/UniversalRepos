import { Pipe } from '@angular/core';
import {DecimalPipe} from "@angular/common";

@Pipe({
  name: 'octet'
})
export class OctetPipe extends DecimalPipe {

  transform(value: number, args?: any): any {
    let newValue = value;
    let size = 'o';
    if (value && value > 1024 && value < 1048576) {
      size = 'kb';
      newValue = value/1024;
    }
    if (value && value > 1048576 && value < 1073741824) {
      size = 'mb';
      newValue = value/1024/1024;
    }
    return `${super.transform(newValue, '1.0-2')} ${size}`;
  }

}
