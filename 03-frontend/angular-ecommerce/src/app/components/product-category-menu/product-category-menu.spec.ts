import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCategoryMenuComponent } from './product-category-menu';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // for ProductService

describe('ProductCategoryMenuComponent', () => {
  let component: ProductCategoryMenuComponent;
  let fixture: ComponentFixture<ProductCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCategoryMenuComponent],
      imports: [HttpClientTestingModule] // because ProductService uses HttpClient
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
