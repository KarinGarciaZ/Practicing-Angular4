import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit{
  posts: any[];
  
  constructor(private service: PostService) {
    
  }

  ngOnInit(){
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';

    this.service.create(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0,0,post);
    }, (error: AppError) =>{
      if (error instanceof BadInput){}
      else throw error;
    });
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(
        response =>{
          console.log(response.json());
        });
  }

  deletePost(post){
    this.service.delete(123)
      .subscribe(
        response =>{
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        }, 
        (error: AppError) =>{
          if (error instanceof NotFoundError)
            alert('Error 404')
          else throw error;
      });
  }
}
