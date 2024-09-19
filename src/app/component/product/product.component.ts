import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductApiService } from '../../services/api/product-api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  public productData : any = []
  constructor(private productApi: ProductApiService) { }

  ngOnInit() {
    this.productApi.getProduct().subscribe(
      data => this.productData = data
    )
  }


}
