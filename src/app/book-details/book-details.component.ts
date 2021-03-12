import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import BooksService from 'src/services/book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id!: number;
  book!: any;
  imageUrl!: string;

  constructor(
    public route: ActivatedRoute, 
    public bookService: BooksService
  ) { }

  ngOnInit(): void {

     this.id = parseInt(this.route.snapshot.params['id']);
    this.bookService.getBookById(this.id).subscribe(
      (param: any) => {
          this.book  =  param;
          this.imageUrl = `http://localhost:8080${param.image}`
      },
      (error :any) => {
        console.log(`une erreur a été rencontrée ${error}`)
      },
      () => {
        console.log('Observable complètée')
      }
    );
    
  }

}
