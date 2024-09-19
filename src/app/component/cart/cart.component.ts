import { Component } from '@angular/core';
import { CartApiService } from '../../services/api/cart-api.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private cartApi: CartApiService) { }
  
  ngOnInit() {
    this.cartApi.postCart().subscribe(
      data => console.log(data)
    )
  }

}
