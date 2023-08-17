export class Cuota{
    idCuota:number;
    fechaPago:Date;
    monto:number;
    idUsuario:number;

    constructor(idCuota:number, fechaPago:Date, monto:number, idUsuario:number){
        this.idCuota = idCuota;
        this.fechaPago = fechaPago;
        this.monto = monto;
        this.idUsuario = idUsuario;
    }
}