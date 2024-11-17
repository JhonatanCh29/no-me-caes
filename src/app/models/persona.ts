export class Persona {
    id: number;
    apellido: string;
    nombre: string;
    dni: string;
    telefono: string;
    correo: string;
    direccion: string;
    sexo: string;
    nacionalidad: string;

    constructor(id: number = 0,
        apellido: string = '',
        nombre: string = '',
        dni: string = '',
        telefono: string = '',
        correo: string = '',
        direccion: string = '',
        sexo: string = '',
        nacionalidad: string = '') {
        this.id = id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
    }
}
