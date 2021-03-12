import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import BooksService from 'src/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnDestroy {
  serviceSubscription!: Subscription
  books!: any;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.serviceSubscription = this.bookService.getBooks().subscribe(
      (param: any) => {
          this.books  =  param;
      },
      (error :any) => {
        console.log(`une erreur a été rencontrée ${error}`)
      },
      () => {
        console.log('Observable complètée')
      }
    );
  }

  ngOnDestroy(){
    this.serviceSubscription.unsubscribe();
  }

}
