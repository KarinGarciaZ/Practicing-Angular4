import { RetoPostService } from './../services/reto-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reto-post',
  templateUrl: './reto-post.component.html',
  styleUrls: ['./reto-post.component.css']
})
export class RetoPostComponent implements OnInit {
  posts: any[];

  constructor(private service: RetoPostService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

}
