import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class CVService{

  constructor(private http:Http)  {}

  //Method to access to back with API Rest. Return the response
  getCV(id): Observable<any> {
    return this.http.get(environment.baseUrl+'/cv/'+id).map(response => response.json());
  }
}
