'use strict';

// Imports Polymer
import {Polymer} from './../polymer';
// Imports child components
import {AppButton} from './../app-button/app-button';
import {AppList} from './../app-list/app-list';

export class DemoApp {

	beforeRegister(){
		this.is = 'demo-app';
		this.properties = {
      data: {
        type: Array,
        value: []
      }
		}
	}

  _loadData(event){
    console.log('# Requested data');
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.set('data', json);
      })
  }

	attached(){
    console.log('Polymer app started!');
	}

}

Polymer(DemoApp);
