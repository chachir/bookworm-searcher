import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private defaultKeyword = new BehaviorSubject("");
  currentKeyword  =this.defaultKeyword.asObservable();

  constructor() { }

  changeKeyword(searchedKeyword: string) {
    this.defaultKeyword.next(searchedKeyword);
  }

}
