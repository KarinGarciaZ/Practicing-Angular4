import { Component } from '@angular/core';

@Component({
    selector: 'techer',
    template: `
        {{text | summary: 15}}
    `
})

export class TeacherComponent{
    text = `
        hola que tal como te va, hoy este rencuentro tiene mucho dolor
    `
}