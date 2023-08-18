import { Component, Input } from '@angular/core';
import { EjerciciosService } from 'src/app/services/ejercicios.service';
import { Ejercicio } from 'src/models/ejercicio';

@Component({
  selector: 'app-add-new-ejercicio',
  templateUrl: './add-new-ejercicio.component.html',
  styleUrls: ['./add-new-ejercicio.component.css']
})
export class AddNewEjercicioComponent {

  @Input() ejercicio: Ejercicio;
  @Input() modalId: string;

  constructor(private ejercicioServices:EjerciciosService){}

  agregarEjercicio(){
    this.ejercicioServices.postEjercicios(this.ejercicio).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    )
  }

}
