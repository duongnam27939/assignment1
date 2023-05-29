import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import {FormBuilder,Validators} from '@angular/forms'
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent {
products!:IProduct
    productsForm= this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(4)]],
      price:[0]
    })

    constructor(private formBuilder: FormBuilder,
      private productService:ProductService,
      private routers:Router){}

    onHandleSubmit(){
      const products:IProduct={
        name:this.productsForm.value.name || '',
        price:this.productsForm.value.price || 0
      }
      const confirm = window.confirm('Bạn có muốn thêm sản phẩm không!')
      if (confirm) {
        this.productService.addProduct(products).subscribe((products)=>{
          this.routers.navigate([''])
        })
      }
      
    }
}
