import { Injectable } from '@angular/core';
import {LogService} from "./log.service";

@Injectable()
export class LocalCounterService {
  counter = 0

  constructor(private logService: LogService) {

  }

  increase(){
    this.counter++
    this.logService.log('increased counter....')
  }

  decrease(){
    this.counter--
    this.logService.log('decreased counter....')
  }
}
