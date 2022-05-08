import { Component, OnInit } from '@angular/core';
import {AppConterService} from "../services/app-conter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers:[AppConterService]
})
export class CounterComponent {

  constructor(public appConterService: AppConterService) { }


}
