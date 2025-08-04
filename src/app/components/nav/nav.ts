import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme/theme-service';
import { ButtonComponent } from '../button/button';
import { MoonIcon } from '../svg/moon';
import { SunIcon } from '../svg/sun';

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [ButtonComponent, MoonIcon, SunIcon],
  styleUrl: './nav.scss',
  template: `
    <nav>
      <button app-button [type]="'ghost'" (click)="toggleTheme()">
        @if (theme() === 'light') {
        <moon-icon></moon-icon>
        } @else {
        <sun-icon></sun-icon>
        }
      </button>
    </nav>
  `,
})
export class NavComponent {
  themeService = inject(ThemeService);
  theme = this.themeService.theme;

  toggleTheme() {
    this.theme.update((prev) => (prev === 'light' ? 'dark' : 'light'));
  }
}
