import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { ProductsAddComponent } from './page/products-add/products-add.component';
import { ProductsEditComponent } from './page/products-edit/products-edit.component';

const routes: Routes = [
  {path: '', component:AdminComponent},
  {path:'products/add',component:ProductsAddComponent},
  {path:'products/:id/edit',component:ProductsEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
