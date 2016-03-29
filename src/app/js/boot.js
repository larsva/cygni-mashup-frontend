import {bootstrap} from 'angular2/platform/browser'; // Angular magic to bootstrap the application in a web browser
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MashupService} from './services/MashupService';
import {AppComponent} from './components/AppComponent';
import {enableProdMode,ComponentRef} from 'angular2/core';
import {appInjector} from './services/appInjector';

let boot = document.addEventListener('DOMContentLoaded', () => {
  enableProdMode();
  bootstrap(AppComponent,[HTTP_PROVIDERS,ROUTER_PROVIDERS,MashupService])
    .then((appRef) => {
      appInjector(appRef.injector);
    });
});

module.exports = boot;