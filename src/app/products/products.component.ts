import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public users = [
    {name: 'Gary', age: '28' ,city:'Guatemala'},
    {name:'Diego', age: '24' ,city: 'El Salvador'},
    {name:'Pamela', age:'24' ,city: ''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
