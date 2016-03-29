import {Injector} from 'angular2/core';

let appInjectorRef;
export const appInjector = (injector) => {
  if (injector) {
    appInjectorRef = injector;
  }
  return appInjectorRef;
};