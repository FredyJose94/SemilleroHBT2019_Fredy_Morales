import { Component, OnInit } from "@angular/core";


/**
 * @description la clase bienvenidaFredyMorales permitira mostrar el nombre y la ciudad
 * 
 * @author Fredy Morales <fredyjose94@outlook.com>
 */

@Component ({

    selector: 'bienvenidaFredyMorales',
    templateUrl:'./bienvenidaFredyMorales-component.html'

})

export class BienvenidaFredyMorales implements OnInit{

    /**
     * @description se declaran las variables que contendran la informacion del autor y la ciudad
     * 
     * @author Freddy Morales <fredyjose94@outlook.com
     */
    
    public nombre_del_autor : string = "Freddy José Morales Martinez";
    public ciudad_del_autor : string = "Polombia - Córdoba - Montería ";

    constructor(){
        console.log ("entro el constructor del componente bienvenida");
    }

    ngOnInit(): void{

    }
}

