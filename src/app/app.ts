import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  QueryList,
  Signal,
  signal,
  ViewChildren,
} from '@angular/core';
import { BrowserWindowComponent } from './components/browser-window/browser-window';
import { CodeBlockComponent } from './components/code-block/code-block';
import { NavComponent } from './components/nav/nav';
import { texts } from './utils';

interface ScrolledItem {
  idx: number;
  element: Element | undefined;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavComponent,
    BrowserWindowComponent,
    CodeBlockComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  @ViewChildren('intersector', { read: ElementRef })
  intersectorParagraphs!: QueryList<ElementRef<HTMLDivElement>>;

  currentScrolledItem = signal<ScrolledItem>({ idx: 0, element: undefined });

  codeText = computed(() => texts[this.currentScrolledItem().idx]);

  ngAfterViewInit(): void {
    const cb: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[]
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intersectorAttr = entry.target.getAttribute(
            'data-intersector-id'
          );
          const idx = intersectorAttr ? Number(intersectorAttr) : 0;
          this.currentScrolledItem.set({ idx, element: entry.target });
        } else {
        }
      });
    };

    const observer = new IntersectionObserver(cb, {
      root: document,
      rootMargin: '-300px 0px -300px 0px',
    });

    this.intersectorParagraphs.forEach(({ nativeElement }) => {
      console.log(nativeElement);
      observer.observe(nativeElement);
    });
  }

  scrollerHeight: Signal<number> = computed(() => {
    const el = this.currentScrolledItem().element;
    if (!el) return 0;

    const height = el.getBoundingClientRect().height + 50;
    // console.log(height);
    return height;
  });

  scrollerPosition: Signal<number> = computed(() => {
    const el = this.currentScrolledItem().element;
    if (!el) return 0;

    // const top = el.getBoundingClientRect().top ?? 0;
    //@ts-ignore
    const top = el.offsetTop - this.scrollerHeight() / 2;
    console.log(top);
    return top;
  });
}
