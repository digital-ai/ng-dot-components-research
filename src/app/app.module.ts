import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {DxDataGridModule} from 'devextreme-angular';
import {HttpClientModule} from '@angular/common/http';
import {DotAppSwitcherWrapperComponent} from './app-switcher-wrapper/app-switcher-wrapper';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        DotAppSwitcherWrapperComponent
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
