import { Pipe, PipeTransform } from '@angular/core';
import {NugetDependency} from "./NugetDependency.model";

@Pipe({
  name: 'nugetDependency'
})
export class NugetDependencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const results = new Array<NugetDependency>();
    if (value) {
      const deps = value.split('|');
      deps.forEach(x => {
        results.push(new NugetDependency(x));
      });
    }
    return results;
  }
}
