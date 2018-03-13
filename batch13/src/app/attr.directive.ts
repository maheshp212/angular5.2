import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]',

})
export class AttrDirective {
   @Input() appAttr(){};
   @Input() msg;

  constructor() { }


  @HostListener('click')
  callMe(){
	/** fixed logic **/
  	alert(this.msg);

  	this.appAttr(); // component specific logic
  };

  display(){
  	console.log('asdf');
  }
}
