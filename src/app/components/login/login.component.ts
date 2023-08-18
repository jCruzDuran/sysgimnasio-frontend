import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService, private router:Router) { }

  email:string = "";
  password:string = "";

  submit() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/main']);
      },
      (error) => console.log(error)
    )
  }
}
