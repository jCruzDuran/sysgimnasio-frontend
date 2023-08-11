import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sysgimnasio-frontend';

  constructor (private router:Router, private loginService:LoginService) { 
    console.log(localStorage.getItem('token'))
    
    this.router.navigate(['/index']);
  }

}
