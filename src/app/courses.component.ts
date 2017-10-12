import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template : `
        <h2>{{ title }}</h2>
        <img [src] = "imageUrl"/>
        <table>
            <tr>
                <td [attr.colspan]="colSpan">hola</td>
            </tr>
        </table>
        <div (click)= "onDiv()" class = "container">
            <button id="firstButton" class="btn btn-primary" [class.active]="isActive" >Button</button>
            <button (click)="toggle()" [style.backgroundColor]="isActive ? 'blue' : 'white'" >Button</button>
        </div>
        <input #email (keyup.enter) = "onEnter(email.value)"/>
        <input [(ngModel)] = "phone" (keyup.enter) = "onKeyUp()"/>
        `
})

/*
        <h2>{{ title }}</h2>//Obtiene el titulo declarado en la clase de abajo
        <img [src] = "imageUrl"/>//     Es otra manera de llamar elementos de la clase, en vez de poner entre doble llave el nombre del elemento,
                                    se le pone corchetes al la propiedad y entre comillas el nombre del elemento que se quiere traer
        <table>
            <tr>
                <td [attr.colspan]="colSpan">hola</td>
            </tr>
        </table>
        <div (click)= "onDiv()" class = "container">//      se llama a una funcion en el evento click y llama una clase de bootstrap
            <button id="firstButton" class="btn btn-primary" [class.active]="isActive" >Button</button>//
            <button (click)="toggle()" [style.backgroundColor]="isActive ? 'blue' : 'white'" >Button</button>//    Llama la funcion toggle de la
                                                    clase a abajo y la funcion es que cambie de estado el boleano, lo que hace que aquí en el
                                                    if ternario se pregunte su esta activo el background sea azul, sino blanco
        </div>
        <input #email (keyup.enter) = "onEnter(email.value)"/>Aquí se envia el email como parámetro
        <input [(ngModel)] = "phone" (keyup.enter) = "onKeyUp()"/>//aquí obtiene el numero y lo pone en un elemento que no se pierde
*/

export class CoursesComponent{
    title = "List of course";
    isActive = false;
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 100;
    phone = "3412412";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onKeyUp(){
        alert(this.phone);
    }

    onEnter(email){//obtiene como parametro el valor del input
        alert(email);
    }

    toggle(){//Activa y desactiva un boton
        this.isActive = !this.isActive;
    }

    onDiv(){
        console.log("on div");
    }

    getTitle(){
        return this.title;
    }
}