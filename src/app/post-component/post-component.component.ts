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
    this.service.getPosts()
    .subscribe(response =>{
      this.posts = response.json();
    }, error =>{
      alert('Something happened');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0,0,post);
    }, (error: AppError) =>{
      if (error instanceof BadInput){}
      else{
        alert('Error 404');
        console.log(error);
      }
    });
  }

  updatePost(post){
    this.service.updatePost(post)
      .subscribe(
        response =>{
          console.log(response.json());
        }, 
        (error: AppError) =>{
          (error instanceof NotFoundError)? alert('Error 404'): alert('Something happened');
          console.log(error);
      });
  }

  deletePost(post){
    this.service.deletePost(post.id)
      .subscribe(
        response =>{
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        }, 
        (error: AppError) =>{
          (error instanceof NotFoundError)? alert('Error 404'): alert('Something happened');
          console.log(error);
      });
  }
}
