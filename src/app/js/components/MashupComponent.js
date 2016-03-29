
import {Component} from 'angular2/core';
import {CanActivate} from 'angular2/router';
import {MashupService} from '../services/MashupService';
import canReadMashup from '../services/CanReadMashup';

@Component({
  selector: 'mashup-view', // Tag to show app
  templateUrl: 'templates/MashupComponent',
})
@CanActivate((next, previous) => {
  return canReadMashup.canRead(next,previous);
})

class MashupComponent {
  mbid;

  constructor( mashupService) {
    this.mashup = {albums:[]};
    this.mashupService = mashupService;
   }

  ngOnInit() {
    this.mashup = canReadMashup.mashup;
  }

};


MashupComponent.parameters = [[MashupService]];

export {MashupComponent};
