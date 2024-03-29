import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(private data: BookService,
    private router: Router,
    private route: ActivatedRoute) { }
    keyword: string;

  ngOnInit(): void {
    this.data.currentKeyword.subscribe(keyword => this.keyword = keyword);
  }

  searchKey(keyword: string){
    keyword = keyword.replace(/\s/gi, '+');
    this.data.changeKeyword(keyword);
  }

  onKeyDownEvent(event: any) {
    this.router.navigate(['/search'], { relativeTo: this.route });
  }

}
