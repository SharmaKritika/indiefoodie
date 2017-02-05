import { Component } from '@angular/core';
import { IRestaurant } from './restaurant';
import { IMenuItem } from './menu';

import { RestaurantService } from './restaurant.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/restaurant/restaurant-detail.component.html',
    styleUrls: ["app/restaurant/restaurant-detail.component.css"]
})

export class RestaurantDetailComponent {
    restaurant: IRestaurant;
    menuItems: IMenuItem[];

    constructor(private _restaurantService: RestaurantService,
                private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.getRestaurant(id);
        this.getMenu(id);
    }

    getRestaurant(id: number): void {
        
        this._restaurantService.getRestaurantById(id)
                                                .subscribe(
                                                    (res: IRestaurant) => this.restaurant = res
                                                );

    }

    getMenu(id: number): void {
        
        this._restaurantService.getMenuById(id)
                                                .subscribe(
                                                    (menuItems: IMenuItem[]) => 
                                                    {
                                                        menuItems.forEach( i => i.isOrdered = false);
                                                        this.menuItems = menuItems;
                                                    }
                                                );

    }

    placeOrder() {
        var orderedMenuItemIds = this.menuItems
            .filter( e => e.isOrdered)
            .map( e => e.id)
            .join(',');
            
        this._router.navigate(['/order', this.restaurant.id, orderedMenuItemIds]);
    }
    
}