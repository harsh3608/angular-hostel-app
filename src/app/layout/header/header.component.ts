import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    Menubar,
    BadgeModule,
    InputTextModule,
    SidebarModule,
    RippleModule,
    StyleClassModule,
    RouterLink,






    
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  isExpanding = true;
  toggleSideBar() {
    this.isExpanding = !this.isExpanding;
  }
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;

  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'Home',
    //     icon: 'pi pi-home',
    //   },
    //   {
    //     label: 'Projects',
    //     icon: 'pi pi-search',
    //     badge: '3',
    //     items: [
    //       {
    //         label: 'Core',
    //         icon: 'pi pi-bolt',
    //         shortcut: '⌘+S',
    //       },
    //       {
    //         label: 'Blocks',
    //         icon: 'pi pi-server',
    //         shortcut: '⌘+B',
    //       },
    //       {
    //         separator: true,
    //       },
    //       {
    //         label: 'UI Kit',
    //         icon: 'pi pi-pencil',
    //         shortcut: '⌘+U',
    //       },
    //     ],
    //   },
    // ];
  }





}
