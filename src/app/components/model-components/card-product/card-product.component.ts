import { Component, Input } from '@angular/core';

@Component({
  selector: 'lht-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  @Input() data: CardProductModel = {
    id: 1,
    name: 'Bộ ấm chén H48 hoa nhài trắng',
    image: 'assets/images/Screenshot_1.png' ,
    price: 150000,
    color: 'Trắng',
    uom: 'Bộ',
    currency: 'VND',
    onClick: ()=> { alert('Xem chi tiết') },
    onClickHoverBtn: ()=> { alert('thêm vào giỏ hàng') }
  }
}

export interface CardProductModel {
  id: number;
  name: string;
  image: string;
  price: number;
  color: string;
  uom: string;
  currency: string;
  onClick: () => void;
  onClickHoverBtn: () => void;
}
