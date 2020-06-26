import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss']
})
export class DetailsProductsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log('ProductId', productId);
  }

}
