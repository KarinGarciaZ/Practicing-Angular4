import { StudentsService } from './students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students;
  constructor(service: StudentsService) {
    this.students = service.getStudents();
  }

  getTitle(){
    return "Students";
  }

  ngOnInit() {
  }

}
