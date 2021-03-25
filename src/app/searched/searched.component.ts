import { Component, OnInit, NgModule } from '@angular/core';

import { Googlebook } from '../interfaces/googlebook';
import { Booksearch } from '../interfaces/booksearch';

import { APIService } from '../services/api.service';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})


export class SearchedComponent implements OnInit {

  books: Googlebook;
  bookSearch: Booksearch;



  //nLibros = 3;
  types = ["all", "books", "magazines"];
  availabilities = ["partial", "fill", "free-ebooks", "paid-ebooks", "ebooks"];

  url: string = "";

  //q: string = "";


  title: string = "";
  author: string = "";
  publisher: string = "";
  subject: string = "";
  isbn: string = "";

  selectedLanguage: string = "";
  selectedType: string = "";
  selectedAvailability: string = "";

  order: string = "";


  
  constructor(private APIService: APIService) {
    //this.bookSearch = new Booksearch();
   }

  ngOnInit(): void {
    //this.getNewBooks('Art');
    this.books = {
      totalItems: 0,
      items: null,
    };
  }

  
  
  /*setNewValueBook(num: number){
    this.nLibros = num;
    console.log(num);
  }*/

  /*getNewBooks(category: string): void{
    this.APIService.search('subject:' + category + '&orderBy=newest&maxResults=6').subscribe((books) => {this.books = books;   });
  }*/



  /*search(){
    this.url = (this.bookSearch.title?.trim().length > 0) ? "+intitle:" : "" + this.bookSearch.title 
    + (this.bookSearch.author?.trim().length > 0) ? "+inauthor:" : "" + this.bookSearch.author 
    + (this.bookSearch.publisher?.trim().length > 0) ? "+inpublisher:" : "" + this.bookSearch.publisher 
    + (this.bookSearch.subject?.trim().length > 0) ? "+subject:" : "" + this.bookSearch.subject 
    + (this.bookSearch.isbn?.trim().length > 0) ? "+isbn:" : "" + this.bookSearch.isbn
    //filters
     + (this.bookSearch.selectedLanguage?.trim().length > 0) ? "&" : "" + this.bookSearch.selectedLanguage 
     + (this.bookSearch.selectedType?.trim().length > 0) ? "&" : "" + this.bookSearch.selectedType 
     + (this.bookSearch.selectedAvailability?.trim().length > 0) ? "&" : "" + this.bookSearch.selectedAvailability 
     + (this.bookSearch.order?.trim().length > 0) ? "&" : "" + this.bookSearch.order;
    console.log(this.url.substring(1))
    this.APIService.search(this.url.substring(1)).subscribe((books) => {this.books = books;   });
  }*/

  search(){
    //TO-DO: clean code
    this.url = (this.title?.trim().length > 0 ? "+intitle:" : "") + this.title 
    + (this.bookSearch.author?.trim().length > 0 ? "+inauthor:" : "") + this.bookSearch.author 
    + (this.publisher?.trim().length > 0 ? "+inpublisher:" : "") + this.publisher 
    + (this.subject?.trim().length > 0 ? "+subject:" : "") + this.subject 
    + (this.isbn?.trim().length > 0 ? "+isbn:" : "") + this.isbn
    //filters
     + (this.selectedLanguage?.trim().length > 0 ? "&" : "") + this.selectedLanguage 
     + (this.selectedType?.trim().length > 0? "&" : "") + this.selectedType 
     + (this.selectedAvailability?.trim().length > 0 ? "&" : "") + this.selectedAvailability 
     + (this.order?.trim().length > 0 ? "&" : "") + this.order;
     
    this.APIService.search(this.url.substring(1)).subscribe((books) => {this.books = books;   });
  }


  /* Searcher - query */
  /*searchByKeyword(keyword: string) {
    keyword = keyword.replace(/\s/gi, '+');
    this.q = this.q + keyword;
  }*/

  searchByAuthor(author: string) {
    author = author.replace(/\s/gi, '+');
    this.bookSearch.author = author;
  }

  searchByTitle(title: string) {
    title = title.replace(/\s/gi, '+');
    this.title = title;
  }

  searchByPublisher(publisher: string) {
    publisher = publisher.replace(/\s/gi, '+');
    this.publisher = publisher;
  }

  searchBySubject(subject: string) {
    subject = subject.replace(/\s/gi, '+');
    this.subject = subject;
  }

  searchByISBN(isbn: string){
    isbn = isbn.replace(/\s/gi, '+');
    this.isbn = isbn;
  }

  
  /* Searcher - filters */
  filterByLanguage(lang: string) {
    this.selectedLanguage = "&langRestrict=" + lang;
  }

  filterType(type: string) { //all, books, magazines
    this.selectedType = "&printType=" + type;
    console.log(this.selectedType);
  }

  filterAvailability(availability: string) { //partial, fill, free-ebooks, paid-ebooks, ebooks
    this.selectedAvailability = "&filter=" + availability;
  }


  /* Searcher - order */
  orderBy(order: string) {
    this.order = "&orderBy=" + order;
    this.search();
  }

}
