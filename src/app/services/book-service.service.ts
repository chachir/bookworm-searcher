import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { InfoBook } from '../interfaces/info-book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private statusSource = new BehaviorSubject("");
  currentStatus  =this.statusSource.asObservable();

  private statusSource2 = new BehaviorSubject<InfoBook>({} as any);
  currentStatus2  =this.statusSource2.asObservable();

  constructor() { }

  changeStatus(status: string) { //searchKeyword
    this.statusSource.next(status);
  }

  changeStatus2(status: InfoBook) { //searchKeyword
    this.statusSource2.next(status);
  }
}
