import { Component } from '@angular/core';

@Component({
  selector: 'lht-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {
  images: any[] = [];

  ngOnInit() {
    //   // Set items array
    this.images = [
      { src: 'assets/images/6.jpg', thumb: 'assets/images/6.jpg' },
      { src: 'assets/images/tre_em.jpg', thumb: 'assets/images/tre_em.jpg' },
      { src: 'assets/images/bat_dia_1.jpg', thumb: 'assets/images/bat_dia_1.jpg' },
    ];
  }
}
