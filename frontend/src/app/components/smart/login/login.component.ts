import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _service: AuthService) { }

  ngOnInit() {
    this._service.login().subscribe((user) => {
      console.log(user);
    });
  }
}

//this._router.navigate(["list"]);
