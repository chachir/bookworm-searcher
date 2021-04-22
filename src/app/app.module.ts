import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule,  routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BookCarouselComponent } from './book-carousel/book-carousel.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { ReadMoreModule } from 'ng-readmore';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent,
    HeaderComponent,
    BookCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReadMoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
