import { Component } from '@angular/core';

@Component({
  selector: 'lht-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  color: string = 'bluegray';

  size: string = 'M';

  liked: boolean = false;

  images: string[] = [];

  selectedImageIndex: number = 0;

  quantity: number = 1;

  ngOnInit(): void {
    this.images = [
        'assets/images/Screenshot_1.png',
        'assets/images/Screenshot_1.png',
        'assets/images/Screenshot_1.png',
        'assets/images/Screenshot_1.png'
    ];
  }
}
