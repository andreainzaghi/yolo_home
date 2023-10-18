import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    async getProductsSmall(): Promise<Product[]> {
        const products = await this.http.get<Product[]>('assets/json/products.json').toPromise();
        console.log(products)
        return products || [];
    }
    
}
