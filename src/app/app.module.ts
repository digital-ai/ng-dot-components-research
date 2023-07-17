import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {DxDataGridModule} from 'devextreme-angular';
import {HttpClientModule} from '@angular/common/http';
import {CustomReactComponentWrapperComponent} from './app-switcher-wrapper/app-switcher-wrapper';
import { ReactCounterWrapperComponent } from './react-custom/react-counter-wrapper.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        CustomReactComponentWrapperComponent,
        ReactCounterWrapperComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        DxDataGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
