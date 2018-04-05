import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

	@Input() appAttr(){};
	@Input() msg = '';

  constructor() { }

  @HostListener('click')
  callMe(){

  	this.appAttr(); // componenet specific logic
  	this.commmonLogic(); // common logic
  }

  commmonLogic(){
  	  	// directive logic
  	// this logic is commmong through out your projecct
  	var c = 2+ 3;
  	alert( this.msg + '::' + c );

  }

}
