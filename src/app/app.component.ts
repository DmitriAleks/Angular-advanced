import {Component, OnInit} from '@angular/core';
import {Observable, interval, Subscription, Subject} from 'rxjs';
import {filter, map, switchMap} from "rxjs/operators";
import {AppConterService} from "./services/app-conter.service";
import {LocalCounterService} from "./services/local-counter.service";
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";



export interface Post {
  title: string
  text: string
  id: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent implements OnInit {
  appState = 'on'
  sub: Subscription
  stream2$: Subject<number> = new Subject<number>()
  counter = 0
  form: FormGroup
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

  get skills():FormArray {
    return this.form.get('skills') as FormArray
  }

  constructor(
    public appConterService: AppConterService,
    public localCounterService: LocalCounterService,

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



  ngOnInit() {
    // setTimeout(()=>{
    //   const a =  [...this.posts]
    // },3000)
    // this.mDate$.subscribe(date => {
    //   this.mDate = date
    // })
    this.form = new FormGroup({
      email: new FormControl('dsd@mail.ru', [Validators.email, Validators.required, MyValidators.restrictedEmails], MyValidators.uniqEmail),
      password: new FormControl('123345', [Validators.minLength(6), Validators.required, Validators.maxLength(8)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])

    })
    console.log(this.form.get('skills'))

  }
  addSkill(){

    const control = new FormControl('', Validators.required);
   // ( <FormArray>this.form.get('skills')).push() // 1 варинт
    (this.form.get('skills') as FormArray).push(control)  //2 вариант

  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    }
    const cityKey = this.form.get('address').get('country').value
    const currentCity = cityMap[cityKey]
    this.form.patchValue({
      address: {city: currentCity}
    })

  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value}
      console.log(formData)
    }
    this.form.reset()
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

  next() {
    this.counter++
    this.stream2$.next(this.counter)
  }


}
