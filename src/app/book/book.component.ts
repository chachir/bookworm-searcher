import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { APIService } from '../services/api.service';

import { ItemBook } from '../interfaces/item-book';
import { Time } from '../interfaces/time';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  averageWPM: number = 300;
  averageWordsPage: number = 300;

  wordsPage: number;
  wpm: number;

  timeEstimated: Time;
  timeTest: Time;

  book: ItemBook;

  doTest: boolean;
  ongoingTest: boolean;
  startTime: number;


  constructor(private APIService: APIService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.doTest = false;
    this.ongoingTest = false;

    this.timeEstimated = {
      time: 0,
      hours: 0,
      minutes: 0,
    };

    this.timeTest = {
      time: 0,
      hours: 0,
      minutes: 0,
    };


    if(id){
      this.getBook(id);
    }
  }


  getBook(idBook: string){
    this.APIService.searchById(idBook).subscribe((book) => {this.book = book;
                                                            this.timeEstimated.time = Number(this.book.volumeInfo.pageCount) * this.averageWordsPage / this.averageWPM;
                                                            this.timeEstimated = this.getHoursMinutes(this.timeEstimated);});
  }

  getHoursMinutes(time: Time){
    time.hours = Math.floor(time.time / 60);
    time.minutes = Math.floor(time.time % 60);
    return time;
  }

  counterWords(text: string) {
    this.wordsPage = text.split(" ").length;
  }

  test() {
    this.doTest = !this.doTest;
    this.ongoingTest = true;
  }

  startTimer() {
    this.startTime = new Date().getTime();
    this.ongoingTest = false;
  }

  stopTimer() {
    this.timeTest.time = (new Date().getTime() - this.startTime) / 1000;
    this.doTest = !this.doTest;

    this.wpm = (this.wordsPage * 60 / this.timeTest.time);
    this.timeTest.time = Number(this.book.volumeInfo.pageCount) * this.averageWordsPage / this.wpm;

    this.timeTest = this.getHoursMinutes(this.timeTest);
  }
}
