export class Descripcionejercicio{
    idDescripcionEjercicio:number;
    idEjercicio:number;
    cantidadSeries:number;
    cantidadRepeticiones:number;
    tiempoDescanso:number;

    constructor(idDescripcionEjercicio:number, idEjercicio:number, cantidadSeries:number, cantidadRepeticiones:number, tiempoDescanso:number){
        this.idDescripcionEjercicio = idDescripcionEjercicio;
        this.idEjercicio = idEjercicio;
        this.cantidadSeries = cantidadSeries;
        this.cantidadRepeticiones = cantidadRepeticiones;
        this.tiempoDescanso = tiempoDescanso;
    }
}