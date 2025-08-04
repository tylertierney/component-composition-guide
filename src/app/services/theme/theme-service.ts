import { effect, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {
    const fromLocal = (localStorage.getItem('theme') ?? 'dark') as Theme;
    this.theme.set(fromLocal);

    effect(() => {
      const theme = this.theme();

      if (theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      }

      localStorage.setItem('theme', theme);
    });
  }

  theme = signal<Theme>('dark');

  // setTheme(theme: Theme) {
  //   // if (theme === 'light') {
  //   //   document.body.classList.remove('dark-theme');
  //   //   document.body.classList.add('light-theme');
  //   // } else {
  //   //   document.body.classList.remove('light-theme');
  //   //   document.body.classList.add('dark-theme');
  //   // }

  //   // localStorage.setItem('theme', theme);
  //   this.theme.set(theme);
  // }
}
