import {Component, OnInit} from '@angular/core';
import {Product, ProductsService} from './products.service';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products!: DataSource<Product>;

    constructor(private productService: ProductsService) {
    }

    ngOnInit(): void {
        this.productService.fetch().subscribe(res => {
            this.products = new DataSource<Product>(res.products);
        })
    }
}
