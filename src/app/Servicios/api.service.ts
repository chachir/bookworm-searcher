import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

//import {interfazLibro} from '';


import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { interfazLibro } from '../interfazLibro';

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


  constructor(private http: HttpClient) { }

  getTopBooks(): Observable<interfazLibro[]> {
    return this.http.get<interfazLibro[]>(this.urlAPI + '?most_viewed&num_items=6', httpOptions); //most_commented
  }

  getNewBooks(): Observable<interfazLibro[]> {
    return this.http.get<interfazLibro[]>(this.urlAPI + 'classes', httpOptions);

  }

}
