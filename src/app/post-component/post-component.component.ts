import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent{
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: Http) {
    http.get(this.url)
    .subscribe(response =>{
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0,0,post);
    });
  }
}
