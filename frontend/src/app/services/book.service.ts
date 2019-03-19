import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  public uri = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  public getBooks() {
    return this._http.get(`${this.uri}/books`);
  }

  public getBookById(id: number) {
    return this._http.get(`${this.uri}/books/${id}`);
  }

  public addBook(title: string, author: string, category: string, isbn: number, year: number) {
    let book = {
      title: title,
      author: author,
      category: category,
      isbn: isbn,
      year: year
    };

    return this._http.post(`${this.uri}/books`, book);
  }

  public updateBook(id: number, title: string, author: string, category: string, isbn: number, year: number) {
    let book = {
      title: title,
      author: author,
      category: category,
      isbn: isbn,
      year: year
    };

    return this._http.patch(`${this.uri}/books/${id}`, book);
  }

  public deleteBook(id: number, title: string, author: string, category: string, isbn: number, year: number) {
    let book = {
      title: title,
      author: author,
      category: category,
      isbn: isbn,
      year: year
    };

    return this._http.post(`${this.uri}/books/${id}`, book);
  }
}

