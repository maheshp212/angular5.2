import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paramssssss'
})
export class ParamsPipe implements PipeTransform {

  transform(inp: any, p1:number,p2:number,p3:number): any {
    return inp * (p1+p2+p3);
  }

}
