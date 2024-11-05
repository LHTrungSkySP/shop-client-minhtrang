import { Component, Input } from '@angular/core';

@Component({
  selector: 'lht-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrl: './card-overview.component.scss'
})
export class CardOverviewComponent {
  @Input() data: any = {
    image: 'assets/images/1.jpg',
    badge: 15,
    title: 'Bát đĩa',
    description: 'Tinh hoa ẩm thực cảm nhận bằng cả đôi mắt nghệ thuật',
    command: ()=> { alert('Routing detail') }
  };
}
