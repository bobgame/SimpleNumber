import { Component, OnInit } from '@angular/core'
import { AllService } from '../common/services/all.service'
import { Router } from '@angular/router'

@Component({
  selector: 'nw-pre-load',
  templateUrl: './pre-load.component.html',
  styleUrls: ['./pre-load.component.scss'],
})
export class PreLoadComponent implements OnInit {

  constructor(
    private all: AllService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.all.load()
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 2500)
  }

}
