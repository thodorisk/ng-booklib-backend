import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public uri = 'http://localhost:3000';
  private _authToken: string;

  constructor(private _http: HttpClient) { }

  public getBooks() {
    this._authToken = 'Bearer'+' '+this._getToken();

    let headers = new HttpHeaders().set('Authorization', this._authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.get(`${this.uri}/books`, {headers: headers});
  }

  public getBookById(id: number) {
    return this._http.get(`${this.uri}/books/${id}`);
  }

  private _getToken(): string {
    return localStorage.getItem('id_token');
  }

  public addBook(title: string, author: string, category: string, year: number, isbn: number) {
    let book = {
      title: title,
      author: author,
      category: category,
      year: year,
      isbn: isbn
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

  public deleteBook(id: string) {
    this._authToken = 'Bearer'+' '+this._getToken();

    let headers = new HttpHeaders().set('Authorization', this._authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.delete(`${this.uri}/books/${id}`, {headers: headers});
  }
}

