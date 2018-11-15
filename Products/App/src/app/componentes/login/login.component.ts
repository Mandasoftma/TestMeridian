import { Component, OnInit } from '@angular/core';
import { RestService } from "../../provider/rest.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  msg: string;
  display:boolean = false;

  constructor(public authService: RestService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    let user = this.authService.login(this.email, this.password);
    user.
    then(value => {
      this.msg = value;
      this.display = true;
      this.router.navigate(['home']);
    })
    .catch(err => {
      console.log('Algo fue mal:',err.message);
      this.msg = err.message;
      this.display = true;
    });
    this.email = '';
    this.password = '';    
  }

}
