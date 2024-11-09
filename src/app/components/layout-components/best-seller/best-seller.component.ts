import { Component } from '@angular/core';

@Component({
  selector: 'lht-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {
  products = [
    {
      id: 1,
      name: 'Bộ ấm chén H48 hoa nhài trắng',
      image: 'assets/images/Screenshot_1.png' ,
      price: 150000,
      color: 'Trắng',
      uom: 'Bộ',
      currency: 'VND',
      onClick: ()=> { alert('Xem chi tiết') },
      onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
    },
    {
      id: 2,
      name: 'Bộ ấm chén H48 hoa nhài trắng',
      image: 'assets/images/Screenshot_1.png' ,
      price: 150000,
      color: 'Trắng',
      uom: 'Bộ',
      currency: 'VND',
      onClick: ()=> { alert('Xem chi tiết') },
      onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
    },
    {
      id: 3,
      name: 'Bộ ấm chén H48 hoa nhài trắng',
      image: 'assets/images/Screenshot_1.png' ,
      price: 150000,
      color: 'Trắng',
      uom: 'Bộ',
      currency: 'VND',
      onClick: ()=> { alert('Xem chi tiết') },
      onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
    },
    {
      id: 4,
      name: 'Bộ ấm chén H48 hoa nhài trắng',
      image: 'assets/images/Screenshot_1.png' ,
      price: 150000,
      color: 'Trắng',
      uom: 'Bộ',
      currency: 'VND',
      onClick: ()=> { alert('Xem chi tiết') },
      onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
    },
    {
      id: 5,
      name: 'Bộ ấm chén H48 hoa nhài trắng',
      image: 'assets/images/Screenshot_1.png' ,
      price: 150000,
      color: 'Trắng',
      uom: 'Bộ',
      currency: 'VND',
      onClick: ()=> { alert('Xem chi tiết') },
      onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
    },
    {
      id: 6,
      name: 'Bộ ấm chén H48 hoa nhài trắng',
      image: 'assets/images/Screenshot_1.png' ,
      price: 150000,
      color: 'Trắng',
      uom: 'Bộ',
      currency: 'VND',
      onClick: ()=> { alert('Xem chi tiết') },
      onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
    },
    {
      id: 7,
      name: 'Bộ ấm chén H48 hoa nhài trắng',
      image: 'assets/images/Screenshot_1.png' ,
      price: 150000,
      color: 'Trắng',
      uom: 'Bộ',
      currency: 'VND',
      onClick: ()=> { alert('Xem chi tiết') },
      onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
    },
    {
      id: 8,
      name: 'Bộ ấm chén H48 hoa nhài trắng',
      image: 'assets/images/Screenshot_1.png' ,
      price: 150000,
      color: 'Trắng',
      uom: 'Bộ',
      currency: 'VND',
      onClick: ()=> { alert('Xem chi tiết') },
      onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
    },
    {
      id: 9,
      name: 'Bộ ấm chén H48 hoa nhài trắng',
      image: 'assets/images/Screenshot_1.png' ,
      price: 150000,
      color: 'Trắng',
      uom: 'Bộ',
      currency: 'VND',
      onClick: ()=> { alert('Xem chi tiết') },
      onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
    }
  ]

  responsiveOptions: any[] | undefined;

  constructor() { }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }
}
