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

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Router',
              icon: 'pi pi-palette',
              items: [
                  {
                      label: 'Installation',
                      route: '/installation'
                  },
                  {
                      label: 'Configuration',
                      route: '/configuration'
                  }
              ]
          },
          {
              label: 'Programmatic',
              icon: 'pi pi-link',
              command: () => {
                  this.router.navigate(['/installation']);
              }
          },
          {
              label: 'External',
              icon: 'pi pi-home',
              items: [
                  {
                      label: 'Angular',
                      url: 'https://angular.io/'
                  },
                  {
                      label: 'Vite.js',
                      url: 'https://vitejs.dev/'
                  }
              ]
          }
      ];
  }
}
