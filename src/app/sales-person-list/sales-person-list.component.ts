import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of object
  salesPersonList: SalesPerson[] = [
    new SalesPerson("zzinaa","Jeong", "jinha4ever@gmail.com", 1235478),
    new SalesPerson("sally","Kim", "sallysally@gmail.com", 103540),
    new SalesPerson("jenny","Lee", "jenny1234@gmail.com", 300254),
    new SalesPerson("sean","Koo", "seankoo@gmail.com", 1002153)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
