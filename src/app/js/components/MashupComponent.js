
import {Component} from 'angular2/core';
import { RouteParams} from 'angular2/router';
import {MashupService} from '../services/MashupService'

@Component({
  selector: 'mashup-view', // Tag to show app
  templateUrl: 'templates/MashupComponent',
})

class MashupComponent {
  mbid;

  constructor( mashupService,routeParams) {
    this.mashup = {biography: {description: 'N/A'}};
    this.mashupService = mashupService;
    this.routeParams = routeParams;
   }

  ngOnInit() {
    let mbId = this.routeParams.get('mbid');
    if (mbId) {
     this.mashupService.getMashup(mbId)
      .subscribe((res) => {
        this.mashup = res;
        console.log('Mashup id>> ', this.mashup.id);
      });
    } else {
    this.mashup = {biography: {description: 'N/A'}};
    }
  }

};


MashupComponent.parameters = [[MashupService],[RouteParams]];

export {MashupComponent};
