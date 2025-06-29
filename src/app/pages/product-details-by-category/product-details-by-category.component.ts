import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
      image: './assets/img/products/studEarRing.jpg',
      description: 'Sparkling diamond studs that go with everything.'
    },
    {
      id: 7,
      name: 'Hoop Earrings',
      categoryId: 2,
      categoryName: 'Earrings',
      price: 29.99,
      image: './assets/img/products/hoopsEarRing.jpg',
      description: 'Trendy gold hoop earrings for everyday wear.'
    },
    {
      id: 8,
      name: 'Huggies Earrings',
      categoryId: 2,
      categoryName: 'Earrings',
      price: 29.99,
      image: './assets/img/products/huggiesEarRing.jpg',
      description: 'Trendy gold hoop earrings for everyday wear.'
    },
    {
      id: 9,
      name: 'Drop Earrings',
      categoryId: 2,
      categoryName: 'Earrings',
      price: 29.99,
      image: './assets/img/products/dropsEarring.jpg',
      description: 'Trendy gold hoop earrings for everyday wear.'
    },
    {
      id: 10,
      name: 'Dangle Earrings',
      categoryId: 2,
      categoryName: 'Earrings',
      price: 29.99,
      image: './assets/img/products/danglesEarRing.jpg',
      description: 'Trendy gold hoop earrings for everyday wear.'
    },

    // Bracelets
    {
      id: 11,
      name: 'Charm Bracelet',
      categoryId: 3,
      categoryName: 'Bracelets',
      price: 39.99,
      image: './assets/img/products/charmBracelets.jpg',
      description: 'Cute charm bracelet with customizable charms.'
    },
    {
      id: 12,
      name: 'Cuff Bracelet',
      categoryId: 3,
      categoryName: 'Bracelets',
      price: 44.99,
      image: 'assets/img/products/cuffBracelets.jpg',
      description: 'Bold and stylish cuff bracelet for a statement look.'
    },
    {
      id: 13,
      name: 'Beaded Bracelet',
      categoryId: 3,
      categoryName: 'Bracelets',
      price: 44.99,
      image: 'assets/img/products/beadedBracelets.jpg',
      description: 'Bold and stylish cuff bracelet for a statement look.'
    },
    {
      id: 14,
      name: 'Tennis Bracelets',
      categoryId: 3,
      categoryName: 'Bracelets',
      price: 44.99,
      image: 'assets/img/products/tennisBracelets.jpg',
      description: 'Bold and stylish cuff bracelet for a statement look.'
    },
    {
      id: 15,
      name: 'Bangle Bracelet',
      categoryId: 3,
      categoryName: 'Bracelets',
      price: 44.99,
      image: 'assets/img/products/bangleBracelets.jpg',
      description: 'Bold and stylish cuff bracelet for a statement look.'
    },

    // Rings
    {
      id: 16,
      name: 'Engagement Ring',
      categoryId: 4,
      price: 199.99,
      image: 'assets/img/products/ring1.jpeg',
      description: 'Beautifully crafted engagement ring with a classic diamond.'
    },
    {
      id: 17,
      name: 'Stackable Rings Set',
      categoryId: 4,
      price: 54.99,
      image: 'assets/img/products/ring2.jpeg',
      description: 'Set of stylish stackable rings for mix-and-match style.'
    }
  ];
  categoryName: string = '';
  constructor(private activeRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.categoryName = params['categoryName'];
      this.products = this.getProductsByCategories();
      // Set SEO tags
      const pageTitle = `${this.categoryName} Collection – Sagar Ornament`;
      const pageDescription = `Browse our exclusive ${this.categoryName.toLowerCase()} collection, crafted with elegance. Shop handcrafted jewelry at Sagar Ornament.`;

      this.titleService.setTitle(pageTitle);
      this.metaService.updateTag({ name: 'description', content: pageDescription });
      this.metaService.updateTag({ name: 'keywords', content: `${this.categoryName.toLowerCase()}, Sagar Ornament, handcrafted jewelry, buy ${this.categoryName.toLowerCase()} online` });

      this.metaService.updateTag({ property: 'og:title', content: pageTitle });
      this.metaService.updateTag({ property: 'og:description', content: pageDescription });
      this.metaService.updateTag({ property: 'og:url', content: `https://sagarornament.com/category/${this.categoryName}` });
      this.metaService.updateTag({ property: 'og:type', content: 'website' });

      // Optional: Set a category-specific image
      const firstProductImage = this.products[0]?.image.replace('./', 'https://sagarornament.com/');
      if (firstProductImage) {
        this.metaService.updateTag({ property: 'og:image', content: firstProductImage });
      }
    });
  }
  getProductsByCategories() {
    return this.products.filter(product => product.categoryName === this.categoryName);
  }
}