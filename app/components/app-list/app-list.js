'use strict';

// Imports Polymer
import {Polymer} from './../polymer';

export class AppList {

	beforeRegister(){
		this.is = 'app-list';
    this.properties = {
      elements: {
        type: Array,
        value: []
      }
    }
	}

}

Polymer(AppList);
