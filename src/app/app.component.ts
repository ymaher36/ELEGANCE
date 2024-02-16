import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from './layouts/header-nav/header-nav.component';
import { SocialFloatingTabComponent } from './layouts/social-floating-tab/social-floating-tab.component';
import { ToastComponent } from './layouts/toast/toast.component';
import LocomotiveScroll from 'locomotive-scroll';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderNavComponent, SocialFloatingTabComponent,ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'ELEGANCE';

  @ViewChild('scrollContent') scrollContent!: ElementRef;

  scroll!: LocomotiveScroll;

  constructor() {
  }

  ngOnInit() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      getDirection: true
    });
  }

  ngAfterViewInit() {
    const ro = new ResizeObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
        if(this.scroll) {
          this.scroll.update();
        }
      });
    });

    ro.observe(this.scrollContent.nativeElement);
  }
}



