export class Usuario{
    idUsuario:number;
    numeroDocumento:string;
    nombreApellido:string;
    fechaNacimiento:Date;
    numeroTelefono:string;
    mail:string;
    idPlan:number;
    idRutina:number;
    password:string;

    constructor(idUsuario:number, numeroDocumento:string, nombreApellido:string, fechaNacimiento:Date, numeroTelefono:string, mail:string, idPlan:number, idRutina:number, password:string){
        this.idUsuario = idUsuario;
        this.numeroDocumento = numeroDocumento;
        this.nombreApellido = nombreApellido; 
        this.fechaNacimiento = fechaNacimiento;
        this.numeroTelefono = numeroTelefono;
        this.mail = mail;
        this.idPlan = idPlan;
        this.idRutina = idRutina;
        this.password = password;
    }
} 