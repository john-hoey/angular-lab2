import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {


  myPosts: Post[] = [
    {
      title: "Something about Tuesday",
      thought: "Today seems long",
    },
    {
      title: "Paczki",
      thought: "Gimme all that fat",
    },
    {
      title: "Angular",
      thought: "Angular is something",
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onDelete = (index):void => {
    this.myPosts.splice(index, 1)
  }

  onSubmit = (post: Post): void => {
    this.myPosts.unshift(post)
  }
}
