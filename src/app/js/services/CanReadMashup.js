import {Injector} from 'angular2/core';
import {appInjector} from './appInjector';
import {MashupService} from './MashupService';
import {Router, ComponentInstruction} from 'angular2/router';

class CanReadMashup {
  constructor() {
    this._mashup = {};
  }

  get mashup() {
    return this._mashup;
  }

  set mashup(mashup) {
    this._mashup = mashup;
  }

  //noinspection JSUnusedLocalSymbols
  canRead(next,previous) {
    let mashupService =  appInjector().get(MashupService);
    let mbId = next.params['mbid'];
    return new Promise((resolve) => {
      mashupService.getMashup(mbId)
        .subscribe((result) => {
          if (result) {
            this._mashup = result;
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (error) => resolve(false));
    });
  }

}

export default new CanReadMashup();
