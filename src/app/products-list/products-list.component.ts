import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
/*
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
  /*
   * @input productList - The Product[] passed to us
  */
 @Input() productList: Product[];

 /*
  * @output onProductSelected - outputs the current Product
  * whenever a new Product is selected.
  */
 @Output() productSelected: EventEmitter<Product>;

 /*
  * @property currentProduct - local state containing the
  * currently selected 'Product'
  */
 private currentProduct: Product;

  constructor() {
    this.productSelected = new EventEmitter();
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.productSelected.emit(product);
  }

  isSelected(product: Product) {
    if (!product || this.currentProduct) {
      return false;
    }
  }

}
