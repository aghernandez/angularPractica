import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
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

    {
      id:3,
      name: 'Tocino',
      category: 'Food',
      description: 'Paquete',
      price: 10,
    },
  ];
  
  getAllProducts(){
    return this.products
  }

  getProductById(id){
    return this.products.filter((product)=> product.id ==id);
  }

}
