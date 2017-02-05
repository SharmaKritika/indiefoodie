import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import { IRestaurant } from './restaurant';
import { IMenuItem } from './menu';
import { IVoucher, IRestaurantVoucher } from './voucher';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class RestaurantService {
    private url = "http://indiefoodiewebapi.azurewebsites.net/api/restaurants";
    
    private voucherUrl = "api/restaurants/voucher.json";

    constructor (private _http: Http) { }

    /** searchKey could be suburb name or postcode */
    getRestaurantsBySearchKey(searchKey: string) : Observable<IRestaurant[]> {
        return this._http.get(this.url)
                        .map(
                                (response: Response) =>
                                {
                                    let restaurants = <IRestaurant[]>response.json();
                                    return restaurants.filter((restaurant: IRestaurant) =>  restaurant.suburb == searchKey.toLowerCase()
                                    || restaurant.postcode == searchKey)
                                })
                        .catch(this.handleError);

        
    }

private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server Error');
}

getRestaurantById(id: number): Observable<IRestaurant> {
    return this._http.get(this.url)
                        .map(
                                (response: Response) =>
                                {
                                    let restaurants = <IRestaurant[]>response.json();
                                    return restaurants.find((restaurant: IRestaurant) =>  restaurant.id == id)
                                });
}

getMenuById(restaurantId: number): Observable<IMenuItem[]> {
    let menuUrl = this.url +'/' + restaurantId +'/menuitems'; 
    return this._http.get(menuUrl)
                        .map(
                                (response: Response) =>
                                {
                                    return <IMenuItem[]>response.json();
                                });
}

getMenuItemsById(restid: number, menuItemIdsAsStr: string): Observable<IMenuItem[]> {
    var menuItemIds = menuItemIdsAsStr.split(',').map( i => parseInt(i)); 
    let menuUrl = this.url +'/' + restid +'/menuitems'; 
    return this._http.get(menuUrl)
                        .map(
                                (response: Response) =>
                                {
                                    let allMenuItems = <IMenuItem[]>response.json();
                                    return allMenuItems
                                        .filter(item => menuItemIds.indexOf(item.id) > -1 );
                                });
}

getVoucherByCode(code: string, id: number): Observable<IVoucher> {
    return this._http.get(this.voucherUrl)
                        .map(
                                (response: Response) =>
                                {
                                    let restaurantVouchers = <IRestaurantVoucher[]>response.json();
                                    return <IVoucher>restaurantVouchers.find(voucher => voucher.restId == id)
                                        .vouchers.find(voucher => voucher.code == code);
                                }
                        );
} 

}