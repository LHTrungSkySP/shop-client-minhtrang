import { Component } from '@angular/core';

@Component({
  selector: 'lht-product-home',
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.scss'
})
export class ProductHomeComponent {
  products = [
    {
      price: '$140.00',
      image: 'assets/images/thu_cong.jpg'
    },
    {
      price: '$140.00',
      image: 'assets/images/thu_cong.jpg'
    },
    {
      price: '$140.00',
      image: 'assets/images/thu_cong.jpg'
    },
    {
      price: '$140.00',
      image: 'assets/images/thu_cong.jpg'
    },
    {
      price: '$140.00',
      image: 'assets/images/thu_cong.jpg'
    },
    {
      price: '$140.00',
      image: 'assets/images/thu_cong.jpg'
    },
  ];
}
