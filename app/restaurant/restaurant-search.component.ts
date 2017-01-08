import { Component } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { IRestaurant } from './restaurant';

@Component ({
    templateUrl: "app/restaurant/restaurant-search.component.html",
    styleUrls: ["app/restaurant/restaurant-search.component.css"],
})
export class RestaurantSearchComponent {
    restaurants: IRestaurant[];
    searchKey: string;
    error: string;

    constructor(private _restaurantService: RestaurantService) {}

    getRestaurantsBySearchKey(): void {
        this.restaurants = null;
        this.error = null;
        this._restaurantService.getRestaurantsBySearchKey(this.searchKey)
                                                .subscribe(
                                                    (res : IRestaurant[]) => this.restaurants = res,
                                                    (error: string) => this.error = "Could not get results. Try later"
                                                    )

    }
}