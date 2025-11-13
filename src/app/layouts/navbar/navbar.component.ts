import { CommonModule, } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from './utils/model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  public navItems: NavItem[] = [
    { label: 'Users', route: '/users' },
    { label: 'Posts', route: '/posts' },
    { label: 'Shares', route: '/shares' },
  ];
}
