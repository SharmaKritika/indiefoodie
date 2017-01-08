import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component ({
    selector: 'star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']  
})

export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating: number;
    @Output() notify : EventEmitter<string> = new EventEmitter<string>() ;

    ngOnChanges() : void {
    this.starWidth = this.rating*86/5;
    }

    onClickNotify(): void {
        this.notify.emit(`The star rating of the product is ${this.rating}`);
    }
}
