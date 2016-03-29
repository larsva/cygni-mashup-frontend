import {Component,EventEmitter} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {MashupComponent} from './MashupComponent';
import {MashupService} from '../services/MashupService';
import {CORE_DIRECTIVES } from 'angular2/common';
import {PROGRESSBAR_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

let _ = require('lodash');

@Component({
  selector: 'mashup-app', // Tag to show app
  templateUrl: 'templates/AppComponent',
  directives: [MashupComponent, PROGRESSBAR_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES,Alert]
})

@RouteConfig([
  {path: 'mashup/:mbid', component: MashupComponent, name: 'Mashup'}
])

class AppComponent {

  constructor(mashupService) {
    this.mashupService = mashupService;
    //noinspection JSUnusedGlobalSymbols
    this.selectedArtist = {};
    this.count = 0;
    //noinspection JSUnusedGlobalSymbols
    this.artists = [
      {name: 'Nirvana', id: '5b11f4ce-a62d-471e-81fc-a69a8278c7da'},
      {name: 'Neil Young', id: '75167b8b-44e4-407b-9d35-effe87b223cf'}
    ];

    this.max = 100;
    this.loadingState = new EventEmitter();
    this.loadingProgress = new EventEmitter(0);

    this.errorMessage = null;
  }

  lookupArtistById(id) {
    return _.find(this.artists, (artist) => artist.id === id);

  }

  handleLoadingChange(loadingInfo) {
    if (loadingInfo.loading) {
      this.loadingStarted();
    } else {
      this.loadingFinished(loadingInfo);
    }
  }

  loadingStarted() {
    this.loadingState.next(true);
    var count = 0;
    this.loadingProgress.next(count);
    this.progressInterval = setInterval(() => {
      count += 4;
      this.loadingProgress.next(count);
    }, 50);
  }

  loadingFinished(loadingInfo) {
    clearInterval(this.progressInterval);
    this.loadingState.next(false);
    this.loadingProgress.next(0);
    if (loadingInfo.error) {
      this.handleLoadingError(loadingInfo.error);
    } else {
      //noinspection JSUnusedGlobalSymbols
      this.selectedArtist = this.lookupArtistById(loadingInfo.mbId);
    }
  }

  handleLoadingError(error) {
    console.log('Error>> ', error);
    this.errorMessage = error;
  }

  ngOnInit() {
    this.loadingState.next(false);
    this.mashupService.loadingChange.subscribe((loadingInfo) => this.handleLoadingChange(loadingInfo));
  }

  //noinspection JSUnusedGlobalSymbols
  closeErrorMessage() {
    this.errorMessage = null;
  }
}
;

AppComponent.parameters = [[MashupService]];

export {AppComponent};
