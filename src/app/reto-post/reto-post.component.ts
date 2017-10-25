import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RetoPostService } from './../services/reto-post.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'reto-post',
  templateUrl: './reto-post.component.html',
  styleUrls: ['./reto-post.component.css']
})
export class RetoPostComponent implements OnInit {
  posts: any[];

  constructor(
    private route: ActivatedRoute,
    private service: RetoPostService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      return this.service.getAll();        
    })
    .subscribe(followers => this.posts = followers);
  }

}
