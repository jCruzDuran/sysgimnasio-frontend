import { Component, Input, EventEmitter, Output } from '@angular/core';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private ejerciciosService: EjerciciosService) {}

  @Input() titulo: string = '';
  @Input() urlImagen: string = '';
  @Input() id: number | undefined; // Cambio de null a undefined
  
  @Output() ejercicioDeleted = new EventEmitter<number>();

  borrar() {
    if (this.id !== undefined) { // Verificación para evitar 'null'
      this.ejerciciosService.deleteEjercicios(this.id).subscribe(
        () => {
          this.ejercicioDeleted.emit(this.id);
        },
        (err) => console.log(err)
      );
    }
  }
}
