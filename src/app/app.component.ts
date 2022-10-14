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
  datarowNew:any;
  result:any
  period = this.tableDemsions.metaData.dimensions.pe
   final:any
 
  constructor(){
   let  period = this.tableDemsions.metaData.dimensions.pe
   const  data =this.tableDemsions.metaData.dimensions.dx
   const   organizationunit =this.tableDemsions.metaData.dimensions.ou
   let dataRow =this.tableDemsions.rows
   
const datarowNew = [period, data, organizationunit, dataRow].filter(arr => arr.period== arr.dataRow);
const result = [...new Set(datarowNew)];
let final = Array.of<any>();
for (const key of result) {
    final = final.concat(key);
}
   
  
  }

  ngOnInit(){
  this.tableDemsions = Array.of(this.tableDemsions)

  
  }
  public firstData(str: any) {
    const Country = this.tableDemsions.metaData.dimensions.pe
    console.log(Country)
    return (
      this.tableDemsions.filter((s) => s.rows == str.Country).indexOf(str) == 0
    );
  }
  objectKeys(obj) {
    return Object.keys(obj);
}

}
