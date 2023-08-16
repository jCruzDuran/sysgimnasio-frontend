import { Component, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';
import { Plan } from 'src/models/plan';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  public selectedPlan: Plan = {idPlan: 0, nombrePlan: '', precio: 0};

  constructor(private planesService: PlanesService) {}
  
  public planes: Plan[] = [];

  ngOnInit() {
    this.getPlanes();
  }

  getPlanes() {
    this.planesService.getPlanes().subscribe(
      (planes: Plan[]) => {
        this.planes = planes;
      },
      (error) => {
        console.error('Error fetching ejercicios:', error);
      }
    );
  }

}

