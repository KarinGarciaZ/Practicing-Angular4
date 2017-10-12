import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tweet-like',
  templateUrl: './tweet-like.component.html',
  styleUrls: ['./tweet-like.component.css']
})
export class TweetLikeComponent implements OnInit {
  @Input() isLiked: boolean;
  @Input() noLikes: number;
  constructor() { }

  toogle(){
    this.isLiked = !this.isLiked;
    if (this.isLiked)
      this.noLikes++;
    else
      this.noLikes--;

    
  }
  ngOnInit() {
  }

}
