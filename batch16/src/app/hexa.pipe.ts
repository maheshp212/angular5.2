import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexa'
})
export class HexaPipe implements PipeTransform {

  transform(x: any): any {
    return x.toString(16);
  }

}


/*
	app.filter('hexa', function(){
		return function(x){
				var c = x.toString(16);
			return c;
		}
	});
*/