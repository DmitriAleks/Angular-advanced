import {Component, Input, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ContentChild, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterContentInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // следить за импутами, если меняется сылка перерисует
 // encapsulation: ViewEncapsulation.None // делает стили не локальными, а глобальными .... кринж
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {
  @Input('myPost') post!: Post
  @Output() onDelete:EventEmitter<Post> = new EventEmitter<Post>()
  @ContentChild('info',{static: true}) infoRef!:  ElementRef

  constructor() {console.log('constructor');}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {
    //console.log(this.infoRef.nativeElement)
    console.log('ngOnInit');
    
  }
ngDoCheck(): void {
  console.log('ngDoCheck');
  
}
ngAfterContentInit(): void {
  console.log('ngAfterContentInit');
  
}
ngOnDestroy(): void {
  console.log('OnDestroy');
  
}

  deletePost(id:any){
    this.onDelete.emit(id)

  }
}
