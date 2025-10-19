import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  lastScrollTop = 0;
  headerTop = '0';
  isVisibleSearch = false;
  isBurgerOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isVisibleSearch = false;
      this.isBurgerOpen = false;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 0) {
      this.headerTop = '-16vh';
    } else if (currentScroll === 0) {
      this.headerTop = '0';
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  toggleSearch(event: Event) {
    event.stopPropagation();
    this.isVisibleSearch = !this.isVisibleSearch;
    this.isBurgerOpen = false;
  }

  toggleBurger() {
    this.isBurgerOpen = !this.isBurgerOpen;
    this.isVisibleSearch = false;
    
    if (this.isBurgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isBurgerOpen = false;
    document.body.style.overflow = '';
  }

  closeAll() {
    this.isBurgerOpen = false;
    this.isVisibleSearch = false;
    document.body.style.overflow = ''; 
  }
}