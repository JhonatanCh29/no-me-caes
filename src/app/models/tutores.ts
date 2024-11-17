import { Escuelaprof } from "./escuelaprof";
import { Linea } from "./linea";
import { Persona } from "./persona";

export class Tutores {
    id: number;
    linea: Linea;
    persona: Persona;
    escuelaprof: Escuelaprof;

    constructor(id: number = 0, linea: Linea, persona: Persona, escuelaprof: Escuelaprof) {
        this.id = id;
        this.linea = linea;
        this.persona = persona;
        this.escuelaprof = escuelaprof;
    }

}
