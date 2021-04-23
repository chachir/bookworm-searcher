import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Googlebook } from '../interfaces/googlebook';
import { ItemBook } from '../interfaces/item-book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class APIService {

  urlGB: string = "https://www.googleapis.com/books/v1/volumes";
  urlGBQuery: string = this.urlGB + "?q=";

  constructor(private http: HttpClient) { }

  searchById(id: string): Observable<ItemBook> {
    return this.http.get<ItemBook>(this.urlGB + '/' + id, httpOptions);
  }
  search(query: string): Observable<Googlebook> {
    return this.http.get<Googlebook>(this.urlGBQuery + query, httpOptions);
  } 

}