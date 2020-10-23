import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("HI")
    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("phone"))
  }

}
