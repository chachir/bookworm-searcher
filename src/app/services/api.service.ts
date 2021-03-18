import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Googlebook } from '../interfaces/googlebook';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class APIService {

  urlGBAPI: string = "https://www.googleapis.com/books/v1/volumes?q=";

  constructor(private http: HttpClient) { }


  /** Recommendations on home page */
  getRecentBooks(category: string): Observable<Googlebook> {
    return this.http.get<Googlebook>(this.urlGBAPI + 'subject:' + category + '&orderBy=newest&maxResults=6', httpOptions);
  }

  getRelevantBooks(category: string): Observable<Googlebook> {
    return this.http.get<Googlebook>(this.urlGBAPI + 'subject:' + category + '&orderBy=relevance&maxResults=6', httpOptions);
  }

  /* Search */
  search(query: string): Observable<Googlebook> {
    return this.http.get<Googlebook>(this.urlGBAPI + query, httpOptions);
  } 
  

}