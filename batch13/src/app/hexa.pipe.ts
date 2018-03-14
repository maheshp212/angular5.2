import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexa'
})
export class HexaPipe implements PipeTransform {

  transform(input: number): any {

    return input.toString(16);
  }

}


/*

app.filter('hexa', function(){
	return function(x, p1, p2 , p3){
	
	}
});


*/
