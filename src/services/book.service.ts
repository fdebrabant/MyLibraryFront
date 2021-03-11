import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export default class BooksService {
  private _service: HttpClient;
 // private _url: string | undefined = process.env.ANGULAR_APP_BACKEND_URL;

  constructor(param_service: HttpClient) {
    this._service = param_service;
  }

  public getBooks(): Observable<object> {
    const $books: Observable<any> = this._service.get('http://localhost:8080/api/books');
    const treatment = (param_data: any[]) => {
      return param_data as object;
    };
    return $books.pipe(map(treatment));
  }
};
