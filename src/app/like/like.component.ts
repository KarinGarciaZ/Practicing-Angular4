import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
  //encapsulation: ViewEncapsulation.Native

})
export class LikeComponent {
  @Input('isActived') isActive: boolean;
  @Output('chang') change = new EventEmitter();
   
  toggle(){
    console.log("2");
    this.isActive = !this.isActive;
    this.change.emit({value: this.isActive});
  }

}

export interface LikeChangedEventArgs{
  newValue: boolean
}
