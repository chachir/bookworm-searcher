import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(private data: BookServiceService) { }
  status: string; //keyword

  ngOnInit(): void {
    this.data.currentStatus.subscribe(status => this.status = status);
  }

  searchKey(keyword: string){
    keyword = keyword.replace(/\s/gi, '+');
    console.log(keyword);
    this.data.changeStatus(keyword);
  }

}
