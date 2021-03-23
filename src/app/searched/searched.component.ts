import { Component, OnInit } from '@angular/core';

import { Googlebook } from '../interfaces/googlebook';

import { APIService } from '../services/api.service';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent implements OnInit {

  books: Googlebook;

  nLibros = 3;
  types = ["all", "books", "magazines"];
  availabilities = ["partial", "fill", "free-ebooks", "paid-ebooks", "ebooks"];

  url: string = "";

  q: string = "";

  title: string = "";
  author: string = "";
  publisher: string = "";
  subject: string = "";
  isbn: string = "";

  selectedLanguage: string = "";
  selectedType: string = "";
  selectedAvailability: string = "";

  order: string = "";


  recentBooks: Googlebook;
  
  constructor(private APIService: APIService) { }

  ngOnInit(): void {
    this.getNewBooks('Art');
  }

  
  setNewValueBook(num: number){
    this.nLibros = num;
    console.log(num);
  }

  getNewBooks(category: string): void{
    this.APIService.search('subject:' + category + '&orderBy=newest&maxResults=6').subscribe((recentBooks) => {this.recentBooks = recentBooks;   });
  }



  search(){
    this.url = this.q
     + this.title + this.author + this.publisher + this.subject + this.isbn
     + this.selectedLanguage + this.selectedType + this.selectedAvailability + this.order;
    
    this.APIService.search(this.url).subscribe((books) => {this.books = books;   });
  }


  /* Searcher - query */
  searchByKeyword(keyword: string) {
    keyword = keyword.replace(/\s/gi, '+');
    this.q = this.q + keyword;
  }

  searchByAuthor(author: string) {
    author = author.replace(/\s/gi, '+');
    this.author = "inauthor:" + author;
  }

  searchByTitle(title: string) {
    title = title.replace(/\s/gi, '+');
    this.title = "intitle:" + title;
  }

  searchByPublisher(publisher: string) {
    publisher = publisher.replace(/\s/gi, '+');
    this.publisher = "inpublisher:" + publisher;
  }

  searchBySubject(subject: string) {
    subject = subject.replace(/\s/gi, '+');
    this.subject = "subject:" + subject;
  }

  searchByISBN(isbn: string){
    isbn = isbn.replace(/\s/gi, '+');
    this.isbn = "isbn:" + isbn;
  }

  
  /* Searcher - filters */
  filterByLanguage(lang: string) {
    this.selectedLanguage = "&langRestrict=" + lang;
  }

  filterType(type: string) { //all, books, magazines
    this.selectedType = "&printType=" + type;
  }

  filterAvailability(availability: string) { //partial, fill, free-ebooks, paid-ebooks, ebooks
    this.selectedAvailability = "&filter=" + availability;
  }


  /* Searcher - order */
  orderBy(order: string) {
    this.order = "&orderBy=" + order;
  }

}
