import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-list',
  imports: [RouterLink, RouterLinkActive, MatListModule, MatSidenavModule],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss',
})
export class NavListComponent {
  closeSideNav = output();
  protected onToggleClose() {
    this.closeSideNav.emit();
  }
}
