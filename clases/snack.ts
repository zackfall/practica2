type TipoSnack = "Comida" | "Bebida"

export class Snack {
    nombre: string;
    tipo: TipoSnack;

    constructor(nombre: string, tipo: TipoSnack) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
}