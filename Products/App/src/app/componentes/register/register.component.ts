import { Component, OnInit } from '@angular/core';
import { RestService } from "../../provider/rest.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string ='';
  password: string ='';
  password2: string ='';
  msg: string = '';
  display: boolean = false;

  constructor(public authService: RestService) { }

  ngOnInit() {
  }

  signUp() {
    if(this.password === this.password2){ 
      let user = this.authService.signup(this.email, this.password);
      user.
      then(value => {
        this.msg = value;
        this.display = true;
      })
      .catch(err => {
        console.log('Algo fue mal:',err.message);
        this.msg = err.message;
        this.display = true;
      });
    }
    else{
      this.msg="Las contraseñas deben coincidir";
      this.display = true;
    }
    this.email = '';
    this.password = '';
    this.password2 = '';    
  }

}
