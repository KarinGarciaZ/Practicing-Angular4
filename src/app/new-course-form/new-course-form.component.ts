import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{
  form = new FormGroup({
    name: new FormControl(),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    console.log(new FormControl(topic.value));
    this.topicss.push(new FormControl(topic.value));

    topic.value = '';
  }

  remove(topic: FormControl){
    console.log(this.topicss);
    let index = this.topicss.controls.indexOf(topic);
    this.topicss.removeAt(index);
  }

  get topicss(){
    return this.form.get('topics') as FormArray;
  }
}
