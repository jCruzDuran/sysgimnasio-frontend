import { Component, Input } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';
import { Plan } from 'src/models/plan';

@Component({
  selector: 'app-add-edit-planes',
  templateUrl: './add-edit-planes.component.html',
  styleUrls: ['./add-edit-planes.component.css']
})
export class AddEditPlanesComponent {
  @Input() plan: Plan;
  @Input() modalId: string;

  constructor(private planesService:PlanesService){}

  editarPlan(){
    this.planesService.putPlanes(this.plan).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    )
  }
}
