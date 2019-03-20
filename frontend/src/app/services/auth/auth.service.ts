import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public uri = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  public login() {
    let user = {
      username: 'test',
      password: 'test'
    }

    return this._http.post(`${this.uri}/login`, user);
  }
}
