'use strict'

export class LoadingInfo {

  constructor(mbId, loading, error) {
    this._mbId =mbId;
    this._loading = loading;
    this._error = error;
  }

  get mbId() {
    return this._mbId;
  }

  get loading() {
    return this._loading;
  }

  get error() {
    return this._error;
  }

}