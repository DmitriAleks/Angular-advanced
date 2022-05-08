import {Component, OnInit} from '@angular/core';
import {Observable, interval, Subscription , Subject} from 'rxjs';
import {filter, map, switchMap} from "rxjs/operators";
import {AppConterService} from "./services/app-conter.service";
import {LocalCounterService} from "./services/local-counter.service";




export interface Post {
  title: string
  text: string
  id: any
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LocalCounterService]
})
export class AppComponent implements OnInit {
  sub: Subscription
  stream2$: Subject<number> = new Subject<number>()
  counter = 0
  constructor(
              public appConterService: AppConterService,
              public localCounterService:LocalCounterService,
              ) {



  // this.sub = this.stream2$.subscribe(value=>{
  //   console.log('subscribe', value)
  // })
    // const stream$ = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(1)
    //   }, 500)
    //   setTimeout(() => {
    //     observer.complete()
    //   }, 2700)
    //   setTimeout(() => {
    //     observer.error('Something error')
    //   }, 2500)
    //
    // })
    // this.sub = stream$.
    // subscribe(
    //   value => console.log('Next', value),
    //   error => console.log('Error', error),
    //   ()=> console.log('Complete' )
    // )

    // const intrervalStream$ = interval(1000)
    // this.sub = intrervalStream$
    //   .pipe(
    //     filter(value => value % 2 === 0),
    //     map((value)=> `Mapped value ${value}`),
    //     switchMap(()=> interval(500))
    //   )
    //   .subscribe((value) => {
    //   console.log('value', value)
    // })
  }

  e: number = Math.E
  str: string = 'hello wordl'
  isVisible = true
  float = 0.42
  date: Date = new Date()
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000)
  })


  mDate$: Observable<Date> = new Observable(obs => {
//     setInterval(()=>{
// obs.next(new Date())
//     },1000)
  })

  mDate: Date

  search = ''
  searchField: string = 'title'

  obj = {
    a: 1, b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  posts: Post[] = [{
    title: "Best Post",
    text: 'the best text the best',
    id: 1
  }, {
    title: "no best Post",
    text: 'the no best text the no best',
    id: 2
  }, {
    title: "no best Post",
    text: 'the no best text the no best',
    id: 3
  }]

  ngOnInit(): void {
    // setTimeout(()=>{
    //   const a =  [...this.posts]
    // },3000)
    this.mDate$.subscribe(date => {
      this.mDate = date
    })
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)

  }

  deletePost(id: any) {
    this.posts = this.posts.filter((post) => post.id !== id)
  }

  stop() {
    this.sub.unsubscribe()
  }

  next(){
    this.counter++
    this.stream2$.next(this.counter)
  }


}
