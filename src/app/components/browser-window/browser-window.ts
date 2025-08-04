import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AvatarIcon } from '../svg/avatar';
import { CurlyBraceIcon } from '../svg/curly-brace';

@Component({
  standalone: true,
  selector: `browser-window`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AvatarIcon, CurlyBraceIcon],
  styleUrls: [`./browser-window.scss`],
  templateUrl: `./browser-window.html`,
})
export class BrowserWindowComponent {
  @Input() showExplanations = false;
}
