import { Component, OnInit } from '@angular/core'
import { AllService } from '../common/services/all.service'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  // ...
} from '@angular/animations'

@Component({
  selector: 'nw-home',
  animations: [
    trigger('flyInOut', [
      state('in', style({
        opacity: '1',
      })),
      transition('void => *', [
        style({
          opacity: '0',
        }),
        animate(800)
      ]),
      transition('* => void', [
        animate(800, style({ opacity: '0' }))
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private all: AllService
  ) { }

  ngOnInit() {
    this.all.load()
  }

}
