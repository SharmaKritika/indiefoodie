import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [StarComponent],
    imports: [FormsModule],
    exports: [StarComponent, CommonModule, FormsModule]
})

export class SharedModule {

}