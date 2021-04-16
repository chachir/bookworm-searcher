import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookServiceService } from './book-service.service';



describe('BookServiceService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [BookServiceService]
  }));

  it('should be created', () => {
   const service: BookServiceService = TestBed.inject(BookServiceService);
   expect(service).toBeTruthy();
  });

  it('should have changeKeyword function', () => {
   const service: BookServiceService = TestBed.inject(BookServiceService);
   expect(service.changeKeyword).toBeTruthy();
  });  

});