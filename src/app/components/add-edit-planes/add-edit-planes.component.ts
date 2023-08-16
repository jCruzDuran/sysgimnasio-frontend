import { Component, Input, OnInit } from '@angular/core';
import { Plan } from 'src/models/plan';

@Component({
  selector: 'app-add-edit-planes',
  templateUrl: './add-edit-planes.component.html',
  styleUrls: ['./add-edit-planes.component.css']
})
export class AddEditPlanesComponent {
  @Input() plan!: Plan;

  ngOnInit() {
    console.log(this.plan);
  }

}
