import { Injectable } from '@angular/core';
import { Lista } from './../clases/listas';

@Injectable()
export class ListaDeseosService {

    public listas : Lista[] = [];

    constructor() {
        
        console.log("servicio antes inicializado");

        let lista1 = new Lista("compras de supermercado");
        let lista2 = new Lista("juegos ");
        let lista3 = new Lista("cosa de la universidad");

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);

        console.log("servicio inicializado");
    }
}