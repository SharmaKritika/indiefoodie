import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    name: string = "Kritika Sharma";
    twitterHandle: string = "@KritikaWebDev"
}
