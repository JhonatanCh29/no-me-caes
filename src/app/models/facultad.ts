import { Campus } from "./campus";

export class Facultad {
    id : number;
    facultas    : string;
    campus: Campus
    
    constructor(id: number = 0,facultas : string='', campus: Campus){
        this.id=id;
        this.facultas=facultas;
        this.campus=campus;
    }
}
