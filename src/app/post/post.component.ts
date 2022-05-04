import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('myPost') post!: Post
  @Output() onDelete:EventEmitter<Post> = new EventEmitter<Post>()
  constructor() { }

  ngOnInit(): void {
  }


  deletePost(id:any){
    this.onDelete.emit(id)

  }
}
