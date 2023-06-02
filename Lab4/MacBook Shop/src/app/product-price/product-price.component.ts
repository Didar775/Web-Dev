import { Component,Input } from '@angular/core';
import {Product} from "../products"

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent {
  @Input() product!:Product;

}
