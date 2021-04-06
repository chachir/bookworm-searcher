import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { SearchedComponent } from './searched/searched.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'book/:id', component: BookComponent },
  { path:'search', component: SearchedComponent },
  { path:'home', component: HomeComponent },
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BookComponent, SearchedComponent, PageNotFoundComponent]

