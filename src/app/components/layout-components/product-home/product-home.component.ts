import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'lht-product-home',
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.scss'
})
export class ProductHomeComponent {
  sortPrice = null;
  sortAZ = null;
  listSort = ["sortPrice", "sortAZ"];

  [key: string]: any;

  products = [1, 2, 3, 4, 5, 6];
  selectedCity!: any;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];


  onPrevPage() {
    alert("prev")
  }
  onNextPage() {
    alert("next")
  }
  constructor() {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  onSort(value: string | null, sortName: string) {
    this.listSort.forEach(ele => {
      if (ele === sortName) {
        this[ele] = value;
      }
      else this[ele] = null;
    });
  }
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
  }
}
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

