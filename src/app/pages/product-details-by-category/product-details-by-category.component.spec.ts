import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsByCategoryComponent } from './product-details-by-category.component';

describe('ProductDetailsByCategoryComponent', () => {
  let component: ProductDetailsByCategoryComponent;
  let fixture: ComponentFixture<ProductDetailsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsByCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
