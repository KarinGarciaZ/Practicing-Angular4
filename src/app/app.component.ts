import { LikeChangedEventArgs } from './like/like.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "The planet",
    isActive: true
  }

  task = {
    title: "hola",
    assignee: {
      name: "oscar"
    }
  }

  mail = ""; 

  courses = [1,2];

  isActive: boolean = false;
  toggle(){
    this.isActive = !this.isActive;
  }

  viewMode = 'm';

  doctors;

  fillDoctors(){
    this.doctors = [
    {id: 0, name: "oscar"},
    {id: 1, name: "Chely"},
    {id: 2, name: "Gabo"}]
  }

  trackDoctor(index, doctor){
    return doctor ? doctor.id : undefined;
  }

  students = [
    {id: 0, name: "oscar"},
    {id: 1, name: "Chely"},
    {id: 2, name: "Gabo"}
  ]

  changeName(student){
    let a = 5;
    let b = a;
    b = 6;
    alert(b +"  "+ a);
    student.name = "Juan";
  }

  addNewStudent(){
    this.students.push({id: 3, name:"Carlos"});
  }

  remove(student){
    let pos = this.students.indexOf(student);
    this.students.splice(pos, 1);//elimina en un arreglo el elemento que quieras, solo pones la posicion y el numero de elementos a eliminar a partir de esa posicion
  }

  toggleViewMode(){
    this.viewMode = (this.viewMode == 'map')? 'list': 'map';
  }

  tweet = {
    isLiked: true,
    noLikes: 10
  }


  onLikeChange(eventArgs: LikeChangedEventArgs){
    console.log("1.-like changed", eventArgs);
  }

  title = 'New Angular App';
}
