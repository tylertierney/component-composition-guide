import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { ButtonComponent } from '../button/button';
import { CopyIcon } from '../svg/copy';

@Component({
  standalone: true,
  selector: 'code-block',
  imports: [CommonModule, ButtonComponent, CopyIcon],
  styleUrls: ['./code-block.scss'],
  templateUrl: './code-block.html',
})
export class CodeBlockComponent {
  _codeText = signal('');
  @Input() set codeText(str: string) {
    this._codeText.set(str);
  }

  htmlStrings = computed(() => {
    const split = this._codeText().split('\n');

    return split
      .map((item) => item.trimEnd())
      .map((str) => ({
        animate: str.includes(`~animate`),
        str: str.replace(`~animate`, ''),
      }))
      .map((idk) => ({
        ...idk,
        str: Prism.highlight(
          idk.str,
          Prism.languages['typescript'],
          'typescript'
        ),
      }));
  });

  copyToClipboard(): void {
    const text = this._codeText().replace(`~animate`, '');
    navigator.clipboard.writeText(text);
  }
}
