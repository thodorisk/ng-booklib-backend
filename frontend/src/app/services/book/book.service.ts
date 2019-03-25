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
    return this._http.get(`${this.uri}/books`, {headers: headers});
  }

  public getBookById(id: number) {
    return this._http.get(`${this.uri}/books/${id}`);
  }

  private _getToken(): string {
    return localStorage.getItem('id_token');
  }

  public addBook(book: IBookData) {
    this._authToken = 'Bearer'+' '+this._getToken();

    let headers = new HttpHeaders().set('Authorization', this._authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.post(`${this.uri}/books`, book, {headers: headers});
  }

  public updateBook(id, book) {
    this._authToken = 'Bearer'+' '+this._getToken();

    let headers = new HttpHeaders().set('Authorization', this._authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.patch(`${this.uri}/books/${id}`, book, {headers: headers});
  }

  public deleteBook(id: string) {
    this._authToken = 'Bearer'+' '+this._getToken();

    let headers = new HttpHeaders().set('Authorization', this._authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.delete(`${this.uri}/books/${id}`, {headers: headers});
  }
}

