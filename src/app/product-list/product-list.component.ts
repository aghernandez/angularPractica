import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products = [
    {
      id:1,
      name: 'Huevos',
      category: 'Food',
      description: 'Carton',
      price: 1,
    },

    {
      id:2,
      name: 'Jamon',
      category: 'Food',
      description: 'Paquete',
      price: 5,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
