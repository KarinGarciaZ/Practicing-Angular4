import { Component } from '@angular/core';
import { AuthorServices } from './authors.service';

@Component({
    selector: "author",
    template: `
        <h2>{{autores.length}}  {{ getTitle() }}</h2>

        <ul>
            <li *ngFor = "let author of autores">{{author}}</li>
        </ul><br>
        <h1>BOOK</h1><br>
        {{book.title | uppercase}}<br>
        {{book.pages}}<br>
        {{book.sheets}}<br>
        {{book.high | number:'2.2-2'}}<br>
        {{book.words | number}}<br>
        {{book.letters}}<br>
        {{book.price | currency:'MXN':true}}<br>
        {{book.dateSale | date:'shortDate'}}
    `
})

/* Esto es lo mismo que arriba solo que arriba no se puede comentar y por eso lo copie y pegué
<h2>{{autores.length}}  {{ getTitle() }}</h2> //Se obtiene el largo del objeto que se trajo desde la otra clase en el injection

        <ul>
            <li *ngFor = "let author of autores">{{author}}</li>//Practicamente es un forEach que hará un <li> por cada elemento en el arreglo
        </ul><br>                                                       que se trajo desde la otra clase
        <h1>BOOK</h1><br>
        {{book.title | uppercase}}<br>//Se obtiene elemento del objeto creado e inicializado en la clase de abajo
        {{book.pages}}<br>
        {{book.sheets}}<br>
        {{book.high | number:'2.2-2'}}<br>//Se obtiene elemento del objeto creado e inicializado en la clase de abajo, 
                                            se indica que es numerico y que tendrá 2 digitos antes y despues del punto
        {{book.words | number}}<br>
        {{book.letters}}<br>
        {{book.price | currency:'MXN':true}}<br>//Se obtiene elemento del objeto creado e inicializado en la clase de abajo, se indica que es
                                                    tipo money y serán pesos mexicanos
        {{book.dateSale | date:'shortDate'}}//Se indica que es tipo date y solo será la fecha por eso (shortDate)
         */

export class AuthorsComponents{
    title = "Autores";
    autores;
    book = {//Se crea objeto
        title: "Le nom du vent",
        pages: 990,
        sheets: 495,
        high: 12.552,
        words: 126421,
        letters: 1234561,
        price: 290,
        dateSale: new Date(2005, 8, 10)
    }

    //se pone como parametro un bojeto de otra clase para facilitar las cosas
    constructor(authors: AuthorServices){
        this.autores = authors.getAuthors();
    }

    getTitle(){
        return this.title;
    }
}