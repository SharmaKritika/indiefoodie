import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RestaurantSearchComponent } from './restaurant-search.component';

@NgModule({
    imports: [RouterModule.forChild([
                                              {path: 'restaurants', component: RestaurantSearchComponent}
                                    ])
            ]
})

export class RestaurantRoutingModule {

}