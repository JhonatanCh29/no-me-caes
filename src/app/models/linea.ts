export class Linea {
    id : number;
    nombre : string;
    estado : string;
    nota_max: string;

    constructor(id: number = 0,nombre : string='',estado : string='', nota_max : string=''){
        this.id=id;
        this.nombre=nombre;
        this.estado=estado;
        this.nota_max=nota_max;
    }
}
