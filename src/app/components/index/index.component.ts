import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckTokenValidityService } from 'src/app/services/check-token-validity.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private router:Router, private checkTokenService:CheckTokenValidityService) {}

  ngOnInit() {

    const token = localStorage.getItem('token');
    
    if(token==null || !this.checkTokenService.checkTokenValidity(token)) {
      this.router.navigate(['/login']);
    }
  }
}
