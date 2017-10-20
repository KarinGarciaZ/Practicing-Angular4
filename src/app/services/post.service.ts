import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: Http) { }
  
  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))
    .catch((error: Response) =>{
      return (error.status === 404)? Observable.throw(new BadInput(error.json())): Observable.throw(new AppError(error.json()));
    });
  }

  updatePost(post){
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({ title: 'prro' }))
      .catch((error: Response) =>{
        return (error.status === 404)? Observable.throw(new NotFoundError(error.json())): Observable.throw(new AppError(error));
      });
  }

  deletePost(id){
    return this.http.delete(this.url + "/" + id)
    .catch((error: Response) =>{
      if (error.status === 404)
        return Observable.throw(new NotFoundError(error.json()));
      return Observable.throw(new AppError(error));
    });
  }
}
