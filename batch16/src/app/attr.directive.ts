import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
	@Input() appAttr(){};

	@Input() msg
	@Input() fname;

  constructor() { }

  @HostListener('click')
  sadf(){
  	console.log('this is custom directive :: ' + this.fname +
  	 ' :: ' + this.msg);

  	this.appAttr();
  	
  	/*customDir()*/
  	// directives-logic
  }



/* {
 	template:
 	restrict: 'EACM'
 	replace: true
 	scope: {msg	:'@'}
 }*/


/*	var a = document.getElementById('asdf');
  a.addEventListener('click', fucntion(){
  	//

  })*/

}
