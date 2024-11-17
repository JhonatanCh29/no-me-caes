import { Facultad } from "./facultad";

export class Escuelaprof {
    id : number;
    carrera : string;
    facultad: Facultad

    constructor(id: number = 0,carrera : string='', facultad: Facultad){
        this.id=id;
        this.carrera=carrera;
        this.facultad=facultad;
    }
}
