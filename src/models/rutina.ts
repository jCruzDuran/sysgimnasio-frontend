export class Rutina{
    idRutina:number;
    nombreRutina:string;
    cantidadDias:number;

    constructor(idRutina:number, nombreRutina:string, cantidadDias: number){
        this.idRutina = idRutina;
        this.nombreRutina = nombreRutina;
        this.cantidadDias = cantidadDias;
    }
}