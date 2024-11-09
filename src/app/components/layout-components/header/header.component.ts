import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lht-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Trang chủ',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/installation']);
        }
      },
      {
        label: 'Thể loại',
        items: [
          {
            label: 'Bát đĩa',
            command: () => {
              this.router.navigate(['/installation']);
            },
          },
          {
            label: 'Ấm chén',
            command: () => {
              this.router.navigate(['/installation']);
            },
          },
          {
            label: 'Lục bình',
            command: () => {
              this.router.navigate(['/installation']);
            },
          },
          {
            label: 'Trẻ em',
            command: () => {
              this.router.navigate(['/installation']);
            },
          },
          {
            label: 'Chum vại',
            command: () => {
              this.router.navigate(['/installation']);
            },
          },
          {
            label: 'Đồ thủ công',
            command: () => {
              this.router.navigate(['/installation']);
            },
          }
        ]
      },
      {
        label: 'Sản phẩm',
        command: () => {
          this.router.navigate(['/installation']);
        }
      },
      {
        label: 'Về chúng tôi',
        command: () => {
          this.router.navigate(['/installation']);
        }
      }
    ];
  }
}
