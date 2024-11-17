import { Persona } from "./persona";

export class Practicante {
    id : number;
    codigo : string;
    anio: string;
    persona: Persona;

    constructor(id: number = 0,codigo : string='',anio : string='', persona : Persona){
        this.id=id;
        this.codigo=codigo;
        this.anio=anio;
        this.persona=persona;
    }
}
