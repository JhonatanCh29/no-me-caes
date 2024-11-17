export class Empresa {
    id: number;
    razón_social: string;
    descripción: string;
    direccion: string;
    ruc: string;

    constructor(id: number = 0, razón_social: string = '', descripción: string = '', direccion: string = '', ruc: string = '') {
        this.id = id;
        this.razón_social = razón_social;
        this.descripción = descripción;
        this.direccion = direccion;
        this.ruc = ruc;
    }
}
