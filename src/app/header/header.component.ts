import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  lastScrollTop = 0;
  headerTop = '0'; // Состояние для top стиля header
  isVisibleSearch = false; // Состояние видимости панели поиска
  isBurgerOpen = false; // Состояние бургер меню

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
      this.headerTop = '-15vh';
    } else if (currentScroll === 0) {
      this.headerTop = '0';
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  toggleSearch(event: Event) {
    event.stopPropagation();
    this.isVisibleSearch = !this.isVisibleSearch;
  }

  closeSearchOutside(event: MouseEvent) {
    const searchBarElement = document.querySelector('.searchBar');
    const searchTriggersElements = document.querySelectorAll('.search-text');

    if (searchBarElement && !searchBarElement.contains(event.target as Node) &&
        searchTriggersElements && ![...searchTriggersElements].some(el => el.contains(event.target as Node))) {
      this.isVisibleSearch = false;
    }
  }

  toggleBurger() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }
}