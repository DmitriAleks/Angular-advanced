import { Component } from '@angular/core';

export interface Post {
  title: string
  text : string
  id: any
} 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

posts: Post[] = [{
  title: "Best Post",
  text: 'the best text the best',
  id: 1
},{
  title: "no best Post",
  text: 'the no best text the no best',
  id: 2
}]

updatePosts(post:Post) {
  this.posts.unshift(post)
  
}
deletePost(id:any){
   this.posts = this.posts.filter((post)=>post.id !== id)
}


}
