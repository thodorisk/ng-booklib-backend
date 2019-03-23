import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface IUser {
  username: string,
  password: string;
}

@Injectable()
export class AuthService {

  private uri = 'http://localhost:3000';
  private loggedInUser: string;
  private authToken: string;

  constructor(private _http: HttpClient) { }

  public authenticateUser(user: IUser) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post(`${this.uri}/user/login`, user,{headers: headers});
  }

  public logout(): void {
    console.log(this.authToken);
    localStorage.removeItem(this.authToken);
    this.authToken = null;
    this.loggedInUser = null;
  }

  public storeToken(data): void {
    localStorage.setItem('id_token', data.token);
    //localStorage.setItem('user', data.user);
    //this.loggedInUser = data.user;
    this.authToken = data.token;
  }

  private _getToken(): string {
    return localStorage.getItem('JWT_TOKEN');
  }
}
