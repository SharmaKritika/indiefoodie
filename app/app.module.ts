import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RestaurantModule } from './restaurant/restaurant.module';
import { WelcomeComponent } from './home/welcome.component';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [BrowserModule, RestaurantModule, AppRoutingModule],
  declarations: [ AppComponent, WelcomeComponent],
  bootstrap: [ AppComponent ]
  
})
export class AppModule { }
