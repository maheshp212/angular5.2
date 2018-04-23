import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addParmas'
})
export class AddParmasPipe implements PipeTransform {

  transform(x: any, p1:number,p2:number,p3 ): any {
    return x* (p1+p2+p3);
  }

}
