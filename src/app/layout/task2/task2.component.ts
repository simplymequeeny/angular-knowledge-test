import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'task2',
  templateUrl: './task2.template.html',
  styleUrls: ['./task2.style.scss']
})
export class Task2Component {
  title = 'Omega';
  target = require('../../../assets/targets/task2.png');
  mockData = [];
  shoppingCart = [];
  totalValue = 0;
  mockCurrency = 'GBP';

  mockSelection = [
    {id:1, amount:1},
    {id:3, amount:2},
    {id:14, amount:11},
    {id:15, amount:1},
    {id:26, amount:7},
    {id:39, amount:3}
  ];

  showPreview = false;

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    //TODO load selected products into shopping cart
    this.calculateTotal()
  }

  calculateTotal(){
    //TODO calculate total price of selected products based on the amount and its unit value
  }

  modifyAmount(event){
    //TODO triggered when amount change
  }

  removeProduct(){
    //TODO triggered when a product is removed
  }

}
