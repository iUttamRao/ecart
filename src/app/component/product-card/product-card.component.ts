import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NzCardModule,NzAvatarModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({required: true}) productData : any = []
}
