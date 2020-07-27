import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HomeHeaderComponent } from '../components/home-header/home-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        HomeHeaderComponent
    ],
    declarations: [HomeHeaderComponent],
    entryComponents: [HomeHeaderComponent],
})
export class SharedModule { }
