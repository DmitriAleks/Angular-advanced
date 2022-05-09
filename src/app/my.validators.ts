import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

interface ErrorMessage {
[key: string]: boolean
}

export class MyValidators {
  static restrictedEmails(control: FormControl): ErrorMessage{
    if (['test@mail.ru'].includes(control.value)) {
      return {restrictedEmails: true}
    }
    return null
  }

  static  uniqEmail(control: FormControl): Promise<ErrorMessage> | Observable<ErrorMessage>{
  return new Promise(resolve =>{
    setTimeout(()=>{
      if(control.value === 'async@mail.ru') {
        resolve({
          uniqEmail: true
        })
      } else {
        resolve(null)
      }
    },1000)
  })
  }
}

