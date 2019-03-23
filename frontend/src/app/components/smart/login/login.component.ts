import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string = null;
  public password: string = null;

  constructor(private _router: Router, private _service: AuthService) { }

  public login(): void {
    let user = {
      username: this.username,
      password: this.password
    }
    
    this._service.authenticateUser(user).subscribe(data => {
      if (data){
        this._service.storeToken(data);
        this._router.navigate(['list']);
      } else {
        // authentication error
      }
    })
  }

  public logout(): void {
    this._service.logout();
    this._router.navigate(['login']);
  }
}

//this._router.navigate(["list"]);
