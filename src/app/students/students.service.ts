import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {
  getStudents(){
    return ["Karin", "Marcos", "Diego"];
}

}
