import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookService } from './book.service';



describe('BookService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [BookService]
  }));

  it('should be created', () => {
   const service: BookService = TestBed.inject(BookService);
   expect(service).toBeTruthy();
  });

  it('should have changeKeyword function', () => {
   const service: BookService = TestBed.inject(BookService);
   expect(service.changeKeyword).toBeTruthy();
  });  

});