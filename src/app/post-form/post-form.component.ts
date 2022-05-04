import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../app.component';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = ''
  text = ''

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput', { static: false }) inputRef!: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: Math.random()
      }
      this.onAdd.emit(post)//метод emit для отправки данных наружу
      this.title = this.text = '';
    }
  }
  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
