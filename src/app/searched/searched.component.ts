import { Component, OnInit, NgModule } from '@angular/core';

import { Googlebook } from '../interfaces/googlebook';
import { Booksearch } from '../interfaces/booksearch';

import { APIService } from '../services/api.service';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})


export class SearchedComponent implements OnInit {

  books: Googlebook;
  bookSearch: Booksearch;

  types = ["all", "books", "magazines"];
  availabilities = ["partial", "full", "free-ebooks", "paid-ebooks", "ebooks"];

  url: string = "";
  selectedType:string= "Type";
  selectedLanguage: string = "Language";
  selectedAvailability: string = "Availability";

  //q: string = "";
  q: string;

  public page: number;


constructor(private APIService: APIService, private data: BookServiceService) {
   }

  ngOnInit(): void {

    this.data.currentStatus.subscribe(q  => this.q = q);
    if(this.q) {
      this.APIService.search(this.q+"&maxResults=40").subscribe((books) => {this.books = books;   });
    }


    this.books = {
      totalItems: 0,
      items: null,
    };

    this.bookSearch = {
      title: "",
      author:"",
      publisher: "",
      subject: "",
      isbn: "",

      selectedLanguage: "",
      selectedType: "",
      selectedAvailability: "",

      order: "",
    };

  }




  search(){
    //TO-DO: clean code
    this.url = (this.bookSearch.title?.trim().length > 0 ? "+intitle:" : "") + this.bookSearch.title
    + (this.bookSearch.author?.trim().length > 0 ? "+inauthor:" : "") + this.bookSearch.author
    + (this.bookSearch.publisher?.trim().length > 0 ? "+inpublisher:" : "") + this.bookSearch.publisher
    + (this.bookSearch.subject?.trim().length > 0 ? "+subject:" : "") + this.bookSearch.subject
    + (this.bookSearch.isbn?.trim().length > 0 ? "+isbn:" : "") + this.bookSearch.isbn
    //filters
     + (this.bookSearch.selectedLanguage?.trim().length > 0 ? "&" : "") + this.bookSearch.selectedLanguage
     + (this.bookSearch.selectedType?.trim().length > 0? "&" : "") + this.bookSearch.selectedType
     + (this.bookSearch.selectedAvailability?.trim().length > 0 ? "&" : "") + this.bookSearch.selectedAvailability
     + (this.bookSearch.order?.trim().length > 0 ? "&" : "") + this.bookSearch.order;

    if(this.url){
      this.APIService.search(this.url.substring(1)+"&maxResults=40").subscribe((books) => {this.books = books;   });
      //after search values should be null
    }

  }


  /* Searcher - query */
  searchByKeyword(keyword: string) {
    keyword = keyword.replace(/\s/gi, '+');
    //this.q = this.q + keyword;
  }

  searchByAuthor(author: string) {
    author = author.replace(/\s/gi, '+');
    this.bookSearch.author = author;
  }

  searchByTitle(title: string) {
    title = title.replace(/\s/gi, '+');
    this.bookSearch.title = title;
  }

  searchByPublisher(publisher: string) {
    publisher = publisher.replace(/\s/gi, '+');
    this.bookSearch.publisher = publisher;
  }

  searchBySubject(subject: string) {
    subject = subject.replace(/\s/gi, '+');
    this.bookSearch.subject = subject;
  }

  searchByISBN(isbn: string){
    isbn = isbn.replace(/\s/gi, '+');
    this.bookSearch.isbn = isbn;
  }


  /* Searcher - filters */
  filterByLanguage(lang: string) {
    this.bookSearch.selectedLanguage = "langRestrict=" + lang;
  }

  filterType(type: string) { //all, books, magazines
    this.bookSearch.selectedType = "printType=" + type;
    console.log(this.bookSearch.selectedType);
  }

  filterAvailability(availability: string) { //partial, fill, free-ebooks, paid-ebooks, ebooks
    this.bookSearch.selectedAvailability = "filter=" + availability;
  }


  /* Searcher - order */
  orderBy(order: string) {
    this.bookSearch.order = "orderBy=" + order;
    this.search();

}

}
