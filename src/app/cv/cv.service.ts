import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

@Injectable()
export class CVService {

  constructor(private http:Http)  {}

  //Method to access to back with API Rest. Return the response
  getCV(id): Observable<any> {
    return this.http.get('http://localhost:8080/cv/dml').map(response => response.json());
  }

}
