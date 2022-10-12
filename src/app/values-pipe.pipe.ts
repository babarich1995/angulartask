import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'values',  pure: false })
export class ValuesPipePipe implements PipeTransform {

  transform(value: any, args: any[] = []): any {
    return Object.keys(value).map(key => value[key]);
  }

}
