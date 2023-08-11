import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
>>>>>>> b9db15402d41dcdd3a3749c9e1c67bfb51e92599

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

<<<<<<< HEAD
=======
  constructor(private loginService:LoginService, private router:Router) {}

  email:string = "";
  password:string = "";

  submit() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/index']);
      },
      (error) => console.log(error)
    )
  }
>>>>>>> b9db15402d41dcdd3a3749c9e1c67bfb51e92599
}
