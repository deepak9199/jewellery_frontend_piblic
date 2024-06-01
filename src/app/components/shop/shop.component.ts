import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { home_page_model, home_Product, home, home_Category } from '../../shared/model/home';
import { product_retailji } from '../../shared/model/product';
import { FirebaseCloudApiService } from '../../shared/services/firebase-cloud-api.service';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent {
  loading: boolean = false
  isproducttypeList: boolean = true
  private detailed_data: home = {
    products: [],
    banner: [],
    category: [],
    subcategory: []
  }
  product_list: home_Product[] = []
  private sub_fire_cloud_api: Subscription | undefined
  constructor(
    private sharedservice: SharedService,
    private router: Router,
    private fireColoud: FirebaseCloudApiService,
  ) { }

  ngOnInit() {

    this.getproducts()
  }
  ngAfterViewInit(): void {
    $(window).trigger('initialisecarousel')
  }
  selectListtype(type: string) {
    if (type === 'list') {
      this.isproducttypeList = true
    }
    else {
      this.isproducttypeList = false
    }
  }
  selectcat(id: string) {

  }
  selectsubcat(cat_id: string, sub_cat_id: string) {

  }
  private getproducts() {
    this.loading = true
    this.fireColoud.getHomedata().subscribe({
      next: (data: home) => {
        this.detailed_data = data
        this.product_list = this.detailed_data.products
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
  customOptions: any = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 }, // For screens less than 480px wide
      480: { items: 1 }, // For screens between 480px and 992px wide
      992: { items: 2 }, // For screens between 992px and 1200px wide
      1200: { items: 3 }, // For screens between 1200px and 2000px wide
      2000: { items: 4 } // For screens wider than 2000px
    }
  };

  ngOnDestroy() {
    this.sub_fire_cloud_api?.unsubscribe();
  }
}
