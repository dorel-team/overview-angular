import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {

  constructor() { }

  param1:any = "pula"

  tari:boolean = false
  ngOnInit(): void {
  }
 arata() {
    this.tari = !this.tari;
  }

}