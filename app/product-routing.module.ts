import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ProductListComponent} from './products/product-list.component';
import {ProductDetail} from './products/product-detail.component';
import {ProductDetailGuard} from './products/product-guard.service';

@NgModule({
    imports: [RouterModule.forChild([
                                    {path: 'products', component: ProductListComponent},
                                    {path: 'products/:id', component: ProductDetail, canActivate: [ProductDetailGuard]}
                                    ]),
              ],
    exports: [RouterModule]
})

export class ProductRoutingModule {

}