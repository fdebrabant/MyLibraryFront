/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { HttpClientModule } from '@angular/common/http';
import BooksService from 'src/services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule { }
