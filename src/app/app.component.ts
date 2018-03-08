import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product[];
  assetPath = '/assets/images/products/';
  constructor() {
    this.product = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        this.assetPath + 'black-shoes.jpg',
        ['Men', 'Shoes', 'Running shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'BLUE JACKET',
        this.assetPath + 'blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        this.assetPath + 'black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ];
   }

   productWasSelected(product: Product): void {
     console.log('Product clicked: ', product);
   }
}

