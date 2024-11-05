import { Component } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'lht-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {
  images!: GalleryItem[];

  ngOnInit() {
    // Set items array
    this.images = [
      new ImageItem({ src: 'assets/images/6.jpg', thumb: 'assets/images/6.jpg' }),
      new ImageItem({ src: 'assets/images/tre_em.jpg', thumb: 'assets/images/tre_em.jpg' }),
      new ImageItem({ src: 'assets/images/bat_dia_1.jpg', thumb: 'assets/images/bat_dia_1.jpg' }),

    ];
  }
}
