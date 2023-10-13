import { Cliente } from "./cliente";
import { Pelicula } from "./pelicula";
import { Sala } from "./sala";

export class Cine {
    private clientes: Cliente[] = [];
    private peliculas: Pelicula[];
    private salas: Sala[];

    constructor(peliculas: Pelicula[], salas: Sala[]) {
        this.peliculas = peliculas;
        this.salas = salas;
    }
}