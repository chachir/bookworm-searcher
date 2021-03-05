import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { SearchedComponent } from './searched/searched.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'tienda', component: BookComponent },
  { path:'contacto', component: SearchedComponent },
  { path:'**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


