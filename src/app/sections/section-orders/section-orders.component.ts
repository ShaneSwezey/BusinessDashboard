import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/Order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  orders: Order[] = [
    {id: 1, 
      customer: {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2018, 2, 12), fulfilled: new Date(2018, 2, 13)},
    {id: 1, 
      customer: {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2018, 2, 12), fulfilled: new Date(2018, 2, 13)},
    {id: 1, 
      customer: {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2018, 2, 12), fulfilled: new Date(2018, 2, 13)},
    {id: 1, 
      customer: {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2018, 2, 12), fulfilled: new Date(2018, 2, 13)},
    {id: 1, 
      customer: {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2018, 2, 12), fulfilled: new Date(2018, 2, 13)}
  ];

  constructor() { }

  ngOnInit() {
  }

}
