import { Component, Input } from '@angular/core';

@Component({
  selector: 'lht-card-contribute',
  templateUrl: './card-contribute.component.html',
  styleUrl: './card-contribute.component.scss'
})
export class CardContributeComponent {
  @Input() data: any = {
    image: 'assets/images/1.jpg',
    badge: 15,
    title: 'Bát đĩa',
    description: 'Tinh hoa ẩm thực cảm nhận bằng cả đôi mắt nghệ thuật',
    command: () => { alert('Routing detail') }
  };
}
