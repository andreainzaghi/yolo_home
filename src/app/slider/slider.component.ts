
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../services/productservice';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
    products: Product[] = [];

    responsiveOptions: any[] | undefined;
    autoplayInterval: any;

    constructor(private productService: ProductService, private cdRef: ChangeDetectorRef) { }
    ngAfterViewInit(): void {
        this.startAutoplay();
    }
    @ViewChild('carousel', { static: false }) carousel: any;

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
        this.startAutoplay();

    }
  
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            const activeIndex = (this.carousel.activeIndex || 0) + 1;
            console.log(activeIndex)
            if (activeIndex >= this.products.length) {
                this.carousel.activeIndex = 0; // Reset to the first item
            } else {
                this.carousel.activeIndex = activeIndex; // Move to the next item
            }
            this.cdRef.detectChanges(); // Manually trigger change detection using the injected service
        }, 5000);
    }
    
    
    ngOnDestroy() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
    
    getSeverity(status: string): any {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return '';
        }
     }
     
}
