import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "../app.component";

  
 @Pipe({
     name:'filter',
     pure: false
 }) 
  
  
   export class FilterPipe implements PipeTransform  {
 
transform(posts: Post[], search: string = '', title: string = 'title'): Post[] {
    if(!search.trim()) {
        return posts
    } else{
        return posts.filter((item)=> item[title].includes(search))
    }
}

} 