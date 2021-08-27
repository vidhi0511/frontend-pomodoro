import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  msg:string | undefined;
  constructor() { }
  what(){
    this.msg='button'
  }
  ngOnInit(): void {
  }
  ReadMore:boolean= true
  visible:boolean=false
  onclick(){
    this.ReadMore = !this.ReadMore;
    this.visible=!this.visible
  };
  ReadMore1:boolean= true
  visible1:boolean=false
  onclick1(){
    this.ReadMore1 = !this.ReadMore1;
    this.visible1=!this.visible1
  };
  ReadMore2:boolean= true
  visible2:boolean=false
  onclick2(){
    this.ReadMore2 = !this.ReadMore2;
    this.visible2=!this.visible2
  };
  ReadMore3:boolean= true
  visible3:boolean=false
  onclick3(){
    this.ReadMore3= !this.ReadMore3;
    this.visible3=!this.visible3
  };
  ReadMore4:boolean= true
  visible4:boolean=false
  onclick4(){
    this.ReadMore4 = !this.ReadMore4;
    this.visible4=!this.visible4
  }
}
