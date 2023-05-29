import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  products!: IProduct[]
  constructor(private productsService: ProductService) {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

  removeId(id:number){
    const confirm = window.confirm("Bạn có chắc muốn xóa sản phẩm này không!")
    if (confirm) {
      this.productsService.deleteProduct(id).subscribe((data) => {
        this.products = this.products.filter(products=>products.id !== id)
      })
    }
    
  }
}
