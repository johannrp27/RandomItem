import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  txtin: string;
  arr: string [];
  random: number;
  word: string;

  constructor() {}
  async generate() {
    console.log(this.txtin);
    this.arr = this.txtin.split(',');
    this.random = Math.floor(Math.random() * this.arr.length);
    console.log(this.arr[this.random]);
    this.word = this.arr[this.random];
  }

}
