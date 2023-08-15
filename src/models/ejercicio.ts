export class Ejercicio{
    idEjercicio:number;
    nombreEjercicio:string;
    urlVideo:string;
    urlImagen:string;

    constructor(idEjercicio:number, nombreEjercicio:string, urlVideo:string, urlImagen:string){
        this.idEjercicio = idEjercicio;
        this.nombreEjercicio = nombreEjercicio;
        this.urlImagen = urlImagen;
        this.urlVideo = urlVideo;
    }
}