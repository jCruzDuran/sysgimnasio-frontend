export class Plan{
    idPlan:number;
    nombrePlan:string;
    precio:number;

    constructor(idPlan:number, nombrePlan:string, precio:number){
        this.idPlan = idPlan;
        this.nombrePlan = nombrePlan;
        this.precio = precio;
    }
}