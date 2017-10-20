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
    }, (error: Response) =>{
      if (error.status === 400){}
        //this.form.setErrors(error.json());
      else{        
      alert('Something happened');
      console.log(error);
      }
    });
  }

  updatePost(post){
    this.service.updatePost(post)
      .subscribe(response =>{
        console.log(response.json());
      }, error =>{
        alert('Something happened');
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
        (error: Response) =>{
          (error.status === 404)? alert('Error 404'): alert('Something happened');
          console.log(error);
      });
  }
}
