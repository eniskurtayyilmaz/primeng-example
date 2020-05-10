import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Anasayfa',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Cari İşlemleri',
        icon: 'pi pi-globe',
        items: [
          { label: 'Cari Listesi', icon: 'pi pi-users' },
          { label: 'Cari Ekle', icon: 'pi pi-user-plus' }
        ]
      }
    ];
  }

}
