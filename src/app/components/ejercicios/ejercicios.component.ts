import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from 'src/app/services/ejercicios.service';
import { Ejercicio } from 'src/models/ejercicio';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
  constructor(private ejerciciosService: EjerciciosService) {}

  public ejercicios: Ejercicio[] = [];
  public nuevoEjercicio: Ejercicio = {
    idEjercicio: 0,
    nombreEjercicio: '',
    urlImagen: '',
    urlVideo: ''
  };

  ngOnInit() {
    this.getEjercicios();
  }

  getEjercicios() {
    this.ejerciciosService.getEjercicios().subscribe(
      (ejercicios: Ejercicio[]) => {
        this.ejercicios = ejercicios;
      },
      (error) => {
        console.error('Error fetching ejercicios:', error);
      }
    );
  }

  handleEjercicioAdded(ejercicio: Ejercicio)
  {
    this.ejercicios.push(ejercicio);
  }

  handleEjercicioDeleted(deletedId: number) {
    this.ejercicios = this.ejercicios.filter(ejercicio => ejercicio.idEjercicio !== deletedId);
  }
}
