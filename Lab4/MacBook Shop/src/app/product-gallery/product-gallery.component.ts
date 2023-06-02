import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,products } from '../products';


@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit{
  product :Product | undefined;
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'))
    this.product = products.find(product => product.id == productIdFromRoute);
    
  }

}
