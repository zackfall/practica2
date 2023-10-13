import { Tipo } from "./tipo";

export class Pelicula {
    nombre: string;
    precio: number;
    duracion: number;
    tipo: Tipo;

    constructor(nombre: string, precio: number, duracion: number, tipo: Tipo) {
        this.nombre = nombre;
        this.precio = precio
        this.duracion = duracion;
        this.tipo = tipo;
    }
}