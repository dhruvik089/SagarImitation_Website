import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories = [
    { id: 1, name: 'Necklaces', image: 'assets/img/products/TeardropEleganceDiamondNecklace.png' },
    { id: 2, name: 'Earrings', image: 'assets/img/products/studEarRing.jpg' },
    { id: 3, name: 'Bracelets', image: 'assets/img/products/tennisBracelets.jpg' },
    { id: 4, name: 'Rings', image: 'assets/img/products/infinityRing.jpg' }
  ];

  bestSellers = [
    {
      id: 1,
      name: 'Pearl Necklace Set',
      image: 'assets/img/products/PearlDropNecklace.jpg',
      price: 1299,
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Gold Plated Earrings',
      image: 'assets/img/products/goldPlatedEarrings.jpg',
      price: 799
    },
    {
      id: 3,
      name: 'Silver Bracelet',
      image: 'assets/img/products/silverBracelet.png',
      price: 899,
      badge: 'Trending'
    },
    {
      id: 4,
      name: 'Diamond Ring',
      image: 'assets/img/products/diamondRing.jpg',
      price: 1499
    }
  ];

  currentSlide = 0;
  carouselInterval: any;

  latitude = 22.301267;
  langitude = 70.816389;

  constructor(private route: Router) { }

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 2;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + 2) % 2;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetCarousel();
  }

  resetCarousel() {
    clearInterval(this.carouselInterval);
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.carouselInterval);
  }
  getCategory(categoryName: any) {
    this.route.navigate(['/product', categoryName]);
  }
  redirectToGoogleMaps() {
    const url = `https://www.google.com/maps?q=${this.latitude},${this.langitude}`;
    window.open(url, '_blank'); // opens in new tab
  }
}