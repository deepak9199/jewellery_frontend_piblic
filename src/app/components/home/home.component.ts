import { Component, ElementRef, ViewChild } from '@angular/core';
import { product_retailji } from '../../shared/model/product';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';
import { FirebaseCloudApiService } from '../../shared/services/firebase-cloud-api.service';
import { home, home_Banner, home_Category, home_Product, home_page_model } from '../../shared/model/home';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loading: boolean = false
  banner_list: home_Banner[] = []
  home_page_list: home_page_model[] = []
  product_list: home_Product[] = []
  retailji_procuct_list: product_retailji[] = []
  private sub_fire_cloud_api: Subscription | undefined
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['&#8249;', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
  };
  customOptionsbanner: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['&#8249;', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1

      },
      1000: {
        items: 1
      }
    }
  };
  constructor(
    private sharedservice: SharedService,
    private router: Router,
    private fireColoud: FirebaseCloudApiService,
  ) { }

  ngOnInit() {
    this.gethomeapi()
  }
  private gethomeapi() {
    this.loading = true
    this.fireColoud.getHomedata().subscribe({
      next: (data: any) => {
        // console.log(data)
        this.banner_list = data.banner
        this.product_list = data.products
        const dataArray = data.category.map((cat_item: home_Category) => {
          return {
            name: cat_item.name,
            category_products: data.products.filter((prod_item: home_Product) => prod_item.category_id === cat_item.id)
          }
        }).filter((home_item: home_page_model) => home_item.category_products.length != 0)
        this.home_page_list = dataArray
        // console.log(this.home_page_list)
        this.loading = false
      },
      error: (err) => {
        console.error(err)
        this.loading = false
      }
    })
  }
  private isMobileScreen(width: number): boolean {
    if (window.innerWidth <= 655) {
      return true;
    } else {
      return false;
    }
  }
  ngOnDestroy() {
    this.sub_fire_cloud_api?.unsubscribe();
  }
}
