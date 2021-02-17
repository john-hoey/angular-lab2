import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

@Output() submitted = new EventEmitter<Post>();
  showForm: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  submitPost = (form: NgForm):void => {
    let newPost: Post = {
      title: form.form.value.title,
      thought: form.form.value.thought
    }
    this.submitted.emit(newPost)
  }
  toggleForm = () => {
    this.showForm = !this.showForm;
  }
}
