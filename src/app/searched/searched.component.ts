import { Component, OnInit } from '@angular/core';

import { APIService } from '../services/api.service';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent implements OnInit {
  
  constructor(private APIService: APIService) { }
  nLibros = 3;

  q: string = "";

  title: string = "";
  author: string = "";
  publisher: string = "";
  subject: string = "";
  isbn: string = "";

  language: string = "";
  type: string = "";
  availability: string = "";

  order: string = "";

  ngOnInit(): void {
    //this.getCategories();
    //this.getNewBooks();
  }

  /*getCategories(): void{ 
    this.APIService.getAllCategories().subscribe((categories) => {this.categories = categories; });
  }*/

  /*getNewBooks(): void{
    this.APIService.getNewBooks().subscribe((newBooks) => {this.newBooks = newBooks; });
  }*/
  
  setNewValueBook(num: number){
    this.nLibros = num;
    console.log(num);
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
    this.language = "&langRestrict=" + lang;
  }

  filterType(type: string) { //all, books, magazines
    this.type = "&printType=" + type;
  }

  filterAvailability(availability: string) { //partial, fill, free-ebooks, paid-ebooks, ebooks
    this.availability = "&filter=" + availability;
  }




  /* Searcher - order */
  orderBy(order: string) {
    this.order = "&orderBy=" + order;
  }

}
