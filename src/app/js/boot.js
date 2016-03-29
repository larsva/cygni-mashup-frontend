import {bootstrap} from 'angular2/platform/browser'; // Angular magic to bootstrap the application in a web browser
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MashupService} from './services/MashupService';
import {AppComponent} from './components/AppComponent';
import {enableProdMode} from 'angular2/core';

let boot = document.addEventListener('DOMContentLoaded', () => {
  enableProdMode();
  bootstrap(AppComponent,[HTTP_PROVIDERS,ROUTER_PROVIDERS,MashupService]);
});

// Expose boot so it can be required by webpack.
module.exports = boot;