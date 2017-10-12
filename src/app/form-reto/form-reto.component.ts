import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-reto',
  templateUrl: './form-reto.component.html',
  styleUrls: ['./form-reto.component.css']
})
export class FormRetoComponent {

  courses = [
    {id: 1, name:"Laravel"},
    {id: 2, name:"AngularJS"},
    {id: 3, name:"Loopback"},
    {id: 4, name:"VueJS"}
  ];

  onClick(f){ console.log(f); }

}
