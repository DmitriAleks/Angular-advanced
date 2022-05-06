 import {  Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string
  text : string
  id: any
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 e: number = Math.E
  str: string = 'hello wordl'
  isVisible = true
  float = 0.42
  date: Date = new Date() 
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(()=>{
resolve('Promise Resolved')
    },4000)
  })


  mDate$: Observable<Date> = new Observable(obs=> {
    setInterval(()=>{
obs.next(new Date())
    },1000)
  })

  mDate:Date

  search=''
  searchField:string = 'title'

  obj={
    a:1,b:{
      c:2,
      d:{
        e:3,
        f:4
      }
    }
  }

posts: Post[] = [{
  title: "Best Post",
  text: 'the best text the best',
  id: 1
},{
  title: "no best Post",
  text: 'the no best text the no best',
  id: 2
},{
  title: "no best Post",
  text: 'the no best text the no best',
  id: 3
}]

ngOnInit(): void {
  setTimeout(()=>{
    const a =  [...this.posts]
  },3000)
  this.mDate$.subscribe(date=>{
this.mDate = date
  })
}

updatePosts(post:Post) {
  this.posts.unshift(post)

}
deletePost(id:any){
   this.posts = this.posts.filter((post)=>post.id !== id)
}




}
