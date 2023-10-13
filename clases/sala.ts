export class Sala {
    numeroSala: number;
    asientosDisponibles: number;
    asientosOcupados: number = 0;

    constructor(numeroSala: number, asientosDisponibles: number) {
        this.numeroSala = numeroSala;
        this.asientosDisponibles = asientosDisponibles;
    }
}