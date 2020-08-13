import { Component, OnInit } from '@angular/core'
import { SudokuDataService } from '../../../services/sudoku-data.service'
import { SudokuShowData } from '../../../data/sudoku-type'
import { SUDOKU_PAGE } from 'src/app/game/sudoku/enum/sudoku-page.enum'

@Component({
  selector: 'nw-sudoku-pop-gameover',
  templateUrl: './sudoku-pop-gameover.component.html',
  styleUrls: ['./sudoku-pop-gameover.component.scss'],
})
export class SudokuPopGameoverComponent implements OnInit {

  SUDOKU_PAGE = SUDOKU_PAGE
  sudokuShowData: SudokuShowData

  constructor(
    private d: SudokuDataService,
  ) {
    this.sudokuShowData = this.d.sudokuShowData
  }

  ngOnInit() { }

  hidePop() {
    this.d.sudokuShowData.pop.gameover = false
  }

  clickOk() {
    this.d.sudokuShowData.isHomeToPlay = true
    this.d.sudokuShowData.pop.hardchoose = true
    // this.d.resetValue(this.d.guessData.len)
    // this.d.createNumber(this.d.guessData.len, this.d.guessData.allNumbers)
    this.hidePop()
  }
  clickClose() {
    this.d.sudokuShowData.page = SUDOKU_PAGE.HOME
    // this.d.resetValue(this.d.guessData.len)
    // this.d.createNumber(this.d.guessData.len, this.d.guessData.allNumbers)
    this.hidePop()
  }

}
