import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-by-category',
  standalone: false,
  templateUrl: './product-details-by-category.component.html',
  styleUrl: './product-details-by-category.component.scss'
})
export class ProductDetailsByCategoryComponent implements OnInit {
  products = [
    // Necklaces
    {
      id: 1,
      name: 'Lariat Necklace',
      categoryId: 1,
      categoryName: 'Necklaces',
      price: 49.99,
      image: './assets/img/products/LariatNecklace.png',
      description: 'Elegant golden heart-shaped necklace for special occasions.'
    },
    {
      id: 2,
      name: 'Pearl Drop Necklace',
      categoryId: 1,
      categoryName: 'Necklaces',
      price: 59.99,
      image: './assets/img/products/PearlDropNecklace.jpg',
      description: 'Classic pearl drop necklace, perfect for weddings and formal events.'
    },
    {
      id: 3,
      name: 'Princess Necklace',
      categoryId: 1,
      categoryName: 'Necklaces',
      price: 59.99,
      image: './assets/img/products/PrincessNecklace.png',
      description: 'Classic pearl drop necklace, perfect for weddings and formal events.'
    },
    {
      id: 4,
      name: 'Teardrop Elegance Diamond Necklace',
      categoryId: 1,
      categoryName: 'Necklaces',
      price: 59.99,
      image: './assets/img/products/TeardropEleganceDiamondNecklace.png',
      description: 'Classic pearl drop necklace, perfect for weddings and formal events.'
    },
    {
      id: 5,
      name: 'Choker Necklace',
      categoryId: 1,
      categoryName: 'Necklaces',
      price: 59.99,
      image: './assets/img/products/ChokerNecklace.png',
      description: 'Classic pearl drop necklace, perfect for weddings and formal events.'
    },

    // Earrings
    {
      id: 6,
      name: 'Diamond Stud Earrings',
      categoryId: 2,
      categoryName: 'Earrings',
      price: 89.99,
      image: 'https://www.tarinika.in/cdn/shop/products/IMGL4927.jpg?v=1637838783&width=1780',
      description: 'Sparkling diamond studs that go with everything.'
    },
    {
      id: 7,
      name: 'Hoop Earrings',
      categoryId: 2,
      categoryName: 'Earrings',
      price: 29.99,
      image: 'https://www.tarinika.in/cdn/shop/products/IMGL4927.jpg?v=1637838783&width=1780',
      description: 'Trendy gold hoop earrings for everyday wear.'
    },

    // Bracelets
    {
      id: 8,
      name: 'Charm Bracelet',
      categoryId: 3,
      price: 39.99,
      image: 'assets/img/products/bracelet1.jpeg',
      description: 'Cute charm bracelet with customizable charms.'
    },
    {
      id: 9,
      name: 'Cuff Bracelet',
      categoryId: 3,
      price: 44.99,
      image: 'assets/img/products/bracelet2.jpeg',
      description: 'Bold and stylish cuff bracelet for a statement look.'
    },

    // Rings
    {
      id: 7,
      name: 'Engagement Ring',
      categoryId: 4,
      price: 199.99,
      image: 'assets/img/products/ring1.jpeg',
      description: 'Beautifully crafted engagement ring with a classic diamond.'
    },
    {
      id: 8,
      name: 'Stackable Rings Set',
      categoryId: 4,
      price: 54.99,
      image: 'assets/img/products/ring2.jpeg',
      description: 'Set of stylish stackable rings for mix-and-match style.'
    }
  ];
  categoryName: string = '';
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.categoryName = params['categoryName'];
      this.products = this.getProductsByCategories();
    });
  }
  getProductsByCategories() {
    return this.products.filter(product => product.categoryName === this.categoryName);
  }
}