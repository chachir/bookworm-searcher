import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { APIService } from './api.service';
import {HttpClientModule} from '@angular/common/http';


describe('APIService', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [APIService]
      }));

      it('should be created', () => {
       const service: APIService = TestBed.inject(APIService);
       expect(service).toBeTruthy();
      });

      it('should have search function', () => {
       const service: APIService = TestBed.inject(APIService);
       expect(service.search).toBeTruthy();
      });
      
      it('should have searchById function', () => {
       const service: APIService = TestBed.inject(APIService);
       expect(service.searchById).toBeTruthy();
      });

    });