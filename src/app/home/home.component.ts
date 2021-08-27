import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getstart(){
    alert("Countdown has started!\n\n     Scroll down\n\n     GOOD LUCK :)")
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
