import { Component, Input } from '@angular/core';
import { EjerciciosService } from 'src/app/services/ejercicios.service';
import { Ejercicio } from 'src/models/ejercicio';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private ejerciciosService: EjerciciosService) { }
  
  borrar() {
    if(this.id != null) {
      this.ejerciciosService.deleteEjercicios(this.id).subscribe(
        (response) => console.log(response),
        (err) => console.log(err)
      )
    }
      
  }

  @Input() titulo: string = '';
  @Input() urlImagen: string = '';
  @Input() id: number | null = null;
}
