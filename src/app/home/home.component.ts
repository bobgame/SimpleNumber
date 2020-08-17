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
        transform: 'scale(1) translateY(0)',
        opacity: '1',
      })),
      transition('void => *', [
        style({
          transform: 'scale(2) translateY(10%)',
          opacity: '0',
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'scale(0.5)' }))
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
