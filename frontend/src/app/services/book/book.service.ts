import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IBookData } from 'src/app/components/smart/booklist/booklist.component';

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
    return this._http.get('books', {headers: headers});
  }

  public getBookById(id: number) {
    return this._http.get('books/${id}');
  }

  private _getToken(): string {
    return localStorage.getItem('id_token');
  }

  public addBook(book: IBookData) {
    this._authToken = 'Bearer'+' '+this._getToken();

    let headers = new HttpHeaders().set('Authorization', this._authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.post('books', book, {headers: headers});
  }

  public updateBook(id, book) {
    this._authToken = 'Bearer'+' '+this._getToken();

    let headers = new HttpHeaders().set('Authorization', this._authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.patch('books/${id}', book, {headers: headers});
  }

  public deleteBook(id: string) {
    this._authToken = 'Bearer'+' '+this._getToken();

    let headers = new HttpHeaders().set('Authorization', this._authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.delete('books/${id}', {headers: headers});
  }
}

