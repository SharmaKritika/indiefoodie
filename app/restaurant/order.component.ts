import { Component } from '@angular/core';
import { IRestaurant } from './restaurant';
import { IMenuItem } from './menu';
import { RestaurantService } from './restaurant.service';
import {Router, ActivatedRoute } from '@angular/router';
import { IVoucher, IRestaurantVoucher } from './voucher';

@Component({
    moduleId: module.id,
    templateUrl: "order.component.html"
})

export class OrderComponent {
    restId: number;
    orderedMenuItems: IMenuItem[];
    total: number = 0;
    voucherCode: string;
    voucher: IVoucher;

    constructor(private _restaurantService: RestaurantService,
                private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit(): void {
        this.restId = this._route.snapshot.params['restId'];
        let menuItemIds = this._route.snapshot.params['menuItemIds'];
        this._restaurantService.getMenuItemsById(this.restId, menuItemIds)
                                .subscribe(items => 
                                { 
                                    this.orderedMenuItems = items;
                                    this.orderedMenuItems.forEach(i => 
                                        { 
                                            i.amount = i.price;
                                            i.quantity = 1;
                                           this.total += i.amount; 
                                        });
                                        

                                });
    }

    onQuantityChanged($event: any): void {
        this.total = 0;
         this.orderedMenuItems
                            
                            .forEach(i => 
                                { 
                                    i.amount = i.price * i.quantity;
                                    this.total += i.amount;
                                 });
                            
    }

    applyVoucher(): void {
        this._restaurantService.getVoucherByCode(this.voucherCode, this.restId)
                                .subscribe((voucher: IVoucher) =>{ this.voucher = voucher;
                                this.total = this.total - ((this.voucher.discount/100) * this.total)});

    }
}