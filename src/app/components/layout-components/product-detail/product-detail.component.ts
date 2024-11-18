import { Component } from '@angular/core';

@Component({
  selector: 'lht-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  color = 0;
  size  = 0;

  liked: boolean = false;

  images: string[] = [];

  selectedImageIndex: number = 0;

  quantity: number = 1;

  ngOnInit(): void {
    this.images = [
        'assets/images/1.jpg',
        'assets/images/1.jpg',
        'assets/images/1.jpg',
        'assets/images/1.jpg'
    ];
  };
  data = {
    id: 0,
    code: 'H1765',
    name: 'Bộ ấm chén H48 hoa nhài trắng',
    images: [
      'assets/images/1.jpg',
      'assets/images/2.jpg',
      'assets/images/3.jpg',
      'assets/images/4.jpg',
      'assets/images/5.jpg',
      'assets/images/6.jpg',
    ],
    price: 250000,
    amountReview: 150,
    rating: 4,
    status: 0,
    group: 'Bát đĩa',
    colorCodes: [
      {
        id: 0,
        code: '#00FFFF'
      },
      {
        id: 1,
        code: '#808080'
      },
      {
        id: 2,
        code: '#FFFF00'
      },
      {
        id: 3,
        code: '#00FF99'
      },
    ],
    decorativeMotifs: [
      {
        id: 0,
        name: 'Trắng ngà'
      },
      {
        id: 1,
        name: 'Hoa sen'
      },
      {
        id: 2,
        name: 'Hoa anh đào'
      },
      {
        id: 3,
        name: 'Rồng - phượng'
      },
    ]
  };
}
