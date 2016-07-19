'use strict';

// Imports Polymer
import {Polymer} from './../polymer';

export class AppButton {

	beforeRegister(){
		this.is = 'app-button';
	}

	_clicked(event){
    this.fire('request');
  }

}

Polymer(AppButton);
