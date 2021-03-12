import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  constructor() { }

  @Input() book!: Book;
  @Input() image!: string;
  imageUrl!: string;

  ngOnInit(): void {
    this.imageUrl = `http://localhost:8080${this.image}`
  }

}
