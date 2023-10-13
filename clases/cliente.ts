import { UbicacionAsiento } from "./asientos";
import { Pelicula } from "./pelicula";
import { Sala } from "./sala";
import { Snack } from "./snack";

export class Cliente {
    private nombre: string;
    private ci: number;
    private pelicula: Pelicula;
    private sala: Sala;
    private ubicacionAsiento: UbicacionAsiento;
    private snacks: Snack[];

    constructor(nombre: string,
                ci: number,
                pelicula: Pelicula,
                sala: Sala,
                ubicacionAsiento: UbicacionAsiento,
                snacks: Snack[])
    {
        this.nombre = nombre;
        this.ci = ci;
        this.pelicula = pelicula;
        this.sala = sala;
        this.ubicacionAsiento = ubicacionAsiento;
        this.snacks = snacks;
    }
}