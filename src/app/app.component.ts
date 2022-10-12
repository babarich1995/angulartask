import { Component,OnInit } from '@angular/core';

import TableJson from './data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'angulartask';
  tableDemsions:any = TableJson;

 
  constructor(){
    console.log(this.tableDemsions)
  }

  ngOnInit(){
  this.tableDemsions = Array.of(this.tableDemsions)

  }


}
