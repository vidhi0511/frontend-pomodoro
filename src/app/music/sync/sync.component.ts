import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css']
})
export class SyncComponent implements OnInit {
  spotify:string="assets/image/spotify.png"
  constructor() { }

  ngOnInit(): void {
  }

}
