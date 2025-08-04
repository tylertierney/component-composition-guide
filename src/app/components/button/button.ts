import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'ghost';

@Component({
  standalone: true,
  selector: 'button[app-button]',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        padding: 0.5rem;
        border-radius: 4px;
        cursor: pointer;

        &.primary {
          background-color: var(--color-primary);

          &:hover {
            background-color: color-mix(
              in hsl,
              var(--color-primary) 80%,
              white
            );
          }
        }

        &.secondary {
          background-color: var(--color-secondary);

          &:hover {
            background-color: color-mix(
              in hsl,
              var(--color-secondary) 90%,
              black
            );
          }
        }

        &.ghost {
          background-color: transparent;

          &:hover {
            background-color: color-mix(
              in hsl,
              transparent 95%,
              var(--text-color)
            );
          }
        }
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary';

  @HostBinding('class') get hostClass() {
    const initialClasses = 'p-3';

    if (this.type === 'primary') {
      return 'primary bg-primary text-neutral-50' + ' ' + initialClasses;
    }
    if (this.type === 'secondary') {
      return 'secondary bg-secondary text-neutral-950' + ' ' + initialClasses;
    }

    if (this.type === 'ghost') {
      return 'ghost' + ' ' + initialClasses;
    }

    return initialClasses;
  }
}
