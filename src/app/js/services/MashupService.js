import {Inject,Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable } from 'rxjs/Rx';
import {LoadingInfo} from '../common/LoadingInfo';

@Injectable()
class MashupService {
  constructor(http) {
    this.http = http;
    this.loadingChange = new Observable((observer) => this._observer = observer);
  }

  getMashup(mbId) {
    this._observer.next(new LoadingInfo(mbId, true));
    return this.http.get('/api/' + mbId)
       .map((res) => {
        this._observer.next(new LoadingInfo(mbId, false));
        return JSON.parse(res._body);
       })
      .catch((e) => {
        let error = e.json().error || 'Server error';
        this._observer.next(new LoadingInfo(mbId, false,error));
        return Observable.throw(error);
      });
  }

}

MashupService.parameters = [new Inject(Http)];

export {MashupService}

