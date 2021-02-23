import { Injectable } from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

//import {interfazLibro} from '';


import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class APIService {
  urlAPI: string = 'https://www.etnassoft.com/api/v1/get/';

  
  constructor() { }
  /*getTopBooks(): Observable<interfazLibro> {
    return this.http.get<interfazLibro>(this.urlAPI + '?most_viewed', httpOptions); //most_commented
  }

  getNewBooks(): Observable<interfazLibro> {
    return this.http.get<interfazLibro>(this.urlAPI + 'classes', httpOptions);
  }*/

}
