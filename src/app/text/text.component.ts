import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'texto',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  frase: string;
  constructor() { }
  onKeyUp(){
   
}

  ngOnInit() {
  }
}
