import { NgModule } from '@angular/core';
import { RestaurantSearchComponent } from './restaurant-search.component';
import { RestaurantDetailComponent } from './restaurant-detail.component';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [RestaurantSearchComponent, RestaurantDetailComponent, OrderComponent],
    exports: [RestaurantSearchComponent],
    providers: [RestaurantService],
    imports: [CommonModule, FormsModule, HttpModule, RouterModule.forChild([
                                              {path: 'restaurants', component: RestaurantSearchComponent},
                                              {path: 'restaurants/:id', component: RestaurantDetailComponent},
                                              {path: 'order/:restId/:menuItemIds', component: OrderComponent}
                                    ])
            ]          
})

export class RestaurantModule {

}