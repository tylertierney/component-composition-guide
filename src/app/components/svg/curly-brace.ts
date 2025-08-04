import { Component, Input } from '@angular/core';

@Component({
  selector: 'curly-brace-icon',
  standalone: true,
  styles: [
    `
      path {
        stroke: inherit;
        stroke-width: 4px;
        fill: none;
        transform-box: fill-box;
        transform-origin: 50% 50%;
      }
    `,
  ],
  template: `
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
      <path
        d="M 223.034 -180.81 L 230.738 -180.81 C 243.505 -180.81 253.852 -148.18 253.852 -107.92 L 253.852 -35.035 C 253.852 5.221 264.199 37.85 276.966 37.85 C 264.199 37.85 253.852 70.481 253.852 110.738 L 253.852 207.92 C 253.852 248.179 243.505 280.808 230.738 280.808 L 223.034 280.808"
        style="stroke: rgb(0, 0, 0); stroke-width: 8px; fill: none; transform-box: fill-box; transform-origin: 50% 50%;"
        transform="matrix(0, 1, -1, 0, -0.000017, 0.000005)"
      ></path>
    </svg> -->
    <svg
      [style]="style"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 100"
    >
      <path
        d="M 223.034 -180.81 L 230.738 -180.81 C 243.505 -180.81 253.852 -148.18 253.852 -107.92 L 253.852 -35.035 C 253.852 5.221 264.199 37.85 276.966 37.85 C 264.199 37.85 253.852 70.481 253.852 110.738 L 253.852 207.92 C 253.852 248.179 243.505 280.808 230.738 280.808 L 223.034 280.808"
        transform="matrix(0, 1, -1, 0, -0.000017, 0.000005)"
      ></path>
    </svg>
  `,
})
export class CurlyBraceIcon {
  @Input() style = '';
}
