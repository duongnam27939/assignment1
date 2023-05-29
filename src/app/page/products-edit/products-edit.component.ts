import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import {FormBuilder,Validators} from '@angular/forms'
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent {
  products!:IProduct
  productsForm= this.formBuilder.group({
    name: ['',[Validators.required, Validators.minLength(4)]],
    price:[0]
  })

  constructor(private formBuilder: FormBuilder,
    private productService:ProductService,
    private router:ActivatedRoute,
    private routers:Router){
      this.router.paramMap.subscribe(params => {
        const id = Number(params.get('id'))
        this.productService.getProduct(id).subscribe((data)=>{
          this.products = data;


          this.productsForm.patchValue({
            name:data.name,
            price:data.price
          })
        })
      })
    }

  onHandleSubmit(){
    const products:IProduct={
      id:this.products.id,  
      name:this.productsForm.value.name || '',
      price:this.productsForm.value.price || 0
    }
    const confirm = window.confirm('Bạn đã có muốn update không!')
    if (confirm) {
      this.productService.updateProduct(products).subscribe((products)=>{
        this.routers.navigate([''])
      })
    }
    
  }
}
