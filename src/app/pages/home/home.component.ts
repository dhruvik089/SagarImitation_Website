import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = [
    { id: 1, name: 'Necklaces', image: 'https://www.borsheims.com/blog/wp-content/uploads/2020/12/types-of-necklaces-1030x515.jpg' },
    { id: 2, name: 'Earrings', image: 'https://www.borsheims.com/blog/wp-content/uploads/2020/12/types-of-necklaces-1030x515.jpg' },
    { id: 3, name: 'Bracelets', image: 'https://www.borsheims.com/blog/wp-content/uploads/2020/12/types-of-necklaces-1030x515.jpg' },
    { id: 4, name: 'Rings', image: 'https://www.borsheims.com/blog/wp-content/uploads/2020/12/types-of-necklaces-1030x515.jpg' }
  ];

  bestSellers = [
    {
      id: 1,
      name: 'Pearl Necklace Set',
      image: 'https://www.borsheims.com/blog/wp-content/uploads/2020/12/types-of-necklaces-1030x515.jpg',
      price: 1299,
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Gold Plated Earrings',
      image: 'https://www.borsheims.com/blog/wp-content/uploads/2020/12/types-of-necklaces-1030x515.jpg',
      price: 799
    },
    {
      id: 3,
      name: 'Silver Bracelet',
      image: 'https://www.borsheims.com/blog/wp-content/uploads/2020/12/types-of-necklaces-1030x515.jpg',
      price: 899,
      badge: 'Trending'
    },
    {
      id: 4,
      name: 'Diamond Ring',
      image: 'https://www.borsheims.com/blog/wp-content/uploads/2020/12/types-of-necklaces-1030x515.jpg',
      price: 1499
    }
  ];

  currentSlide = 0;
  carouselInterval: any;

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
}
