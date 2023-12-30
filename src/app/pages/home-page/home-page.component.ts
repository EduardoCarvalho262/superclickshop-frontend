import { Component } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  products: Product[] = [];

    constructor(private productService: ProductsService){}

    ngOnInit(): void {
      this.loadProducts();
    }


    loadProducts(): void {
      this.productService.getProducts()
        .subscribe({
           next: (res) => {
            this.products = res;
            console.log(this.products);
           },
           error: (erro) =>{
            console.error(`Erro: ${erro}`);
           }
        })
    }
}
