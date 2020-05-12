import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText:String ="Add an Item";
  goalText:String =" My First Life Goal";
  goals=[];

  addItem()
  {
    this.goals.push(this.goalText);
    this.goalText="";
    this.itemCount=this.goals.length;
  }



  constructor() { }

  ngOnInit(): void {
    this.itemCount=this.goals.length;
  }

}
