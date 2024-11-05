import { Component, Input } from '@angular/core';

@Component({
  selector: 'lht-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrl: './gallery-category.component.scss'
})
export class GalleryCategoryComponent {
  products = [
    {
      image: 'assets/images/1.jpg',
      badge: 15,
      title: 'Bát đĩa',
      description: 'Tinh hoa ẩm thực cảm nhận bằng cả đôi mắt nghệ thuật',
      command: ()=> { alert('Routing detail') }
    },
    {
      image: 'assets/images/Screenshot_1.png',
      badge: 8,
      title: 'Ấm chén',
      description: 'Tinh hoa ẩm thực cảm nhận bằng cả đôi mắt nghệ thuật',
      command: ()=> { alert('Routing detail') }
    },
    {
      image: 'assets/images/311498819_552499996877357_7498713586549304461_n.jpg',
      badge: 6,
      title: 'Lục bình',
      description: 'Thưởng trà tinh tế từ ấm chén Minh Trang',
      command: ()=> { alert('Routing detail') },
    },
    {
      image: 'assets/images/tre_em.jpg',
      badge: 9,
      title: 'Trẻ em',
      description: 'Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.',
      command: ()=> { alert('Routing detail') },
    },
    {
      image: 'assets/images/chum_vai.jpg',
      badge: 11,
      title: 'Chum vại',
      description: 'Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.',
      command: ()=> { alert('Routing detail') },
    },
    {
      image: 'assets/images/thu_cong.jpg',
      badge: 99,
      title: 'Đồ thủ công',
      description: 'Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.',
      command: ()=> { alert('Routing detail') },
    }
  ];
}

