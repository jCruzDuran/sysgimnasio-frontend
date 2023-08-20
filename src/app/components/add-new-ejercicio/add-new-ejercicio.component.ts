import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() ejercicioAgregado = new EventEmitter<Ejercicio>()

  constructor(private ejercicioServices:EjerciciosService){}

  agregarEjercicio(){
    this.ejercicioServices.postEjercicios(this.ejercicio).subscribe(
      (response)=> this.ejercicioAgregado.emit(this.ejercicio),
      (error)=> console.log(error)
    )
  }

}
