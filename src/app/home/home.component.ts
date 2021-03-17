import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

import { Googlebook } from '../interfaces/googlebook';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recentBooks: Googlebook;



  constructor(private APIService: APIService) { }

  ngOnInit(): void {

    this.getNewBooks();
    /*this.getTopBooks();*/

  }

  getNewBooks(): void{
    this.APIService.getRecentBooks('art').subscribe((recentBooks) => {this.recentBooks = recentBooks; for(var som of recentBooks.items){ console.log(som.volumeInfo.title);}   });
  }

  /*getTopBooks(): void {
    this.APIService.getTopBooks().subscribe((topBooks) => {this.topBooks = topBooks; });
  }*/

}




