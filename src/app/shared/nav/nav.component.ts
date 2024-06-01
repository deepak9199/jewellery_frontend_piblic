import { Component } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { CollectionService } from '../services/collection.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { users } from '../model/user';
import { Subscription } from 'rxjs';
import { home_Banner, home_page_model, home_Product, home, home_Category, home_Subcategory } from '../model/home';
import { product_retailji } from '../model/product';
import { FirebaseCloudApiService } from '../services/firebase-cloud-api.service';
import { SharedService } from '../services/shared.service';
import { cat_list } from '../model/category';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  loading: boolean = false
  islogin: boolean = false
  cat_list: cat_list[] = []
  private sub_fire_cloud_api: Subscription | undefined
  constructor(
    private sharedservice: SharedService,
    private router: Router,
    private fireColoud: FirebaseCloudApiService,
    private tokenstorage: TokenStorageService,
  ) { }

  ngOnInit() {
    this.gethomeapi()
    this.gettrigertrefresh()
    this.islogin = this.ValidatorChecker(this.tokenstorage.getToken())

  }
  private gethomeapi() {
    this.loading = true
    this.fireColoud.getHomedata().subscribe({
      next: (data: home) => {
        this.cat_list = data.category.map((itemcat: home_Category) => {
          return { name: itemcat.name, sub_cat: data.subcategory.filter((item: home_Subcategory) => item.category_id === itemcat.id).sort((a, b) => a.name.localeCompare(b.name)) }
        }).sort((a, b) => a.name.localeCompare(b.name))
        this.cat_list
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
  routtohome() {
    console.log('route home')
    this.router.navigate(['/']).then(() => {
      // window.location.reload()
    })
  }
  private ValidatorChecker(data: any) {

    if (typeof data === "undefined" || data === null || data === '') {
      return false
    }
    else {
      return true
    }
  }
  private gettrigertrefresh() {
    this.sharedservice.functionTriggerObservable.subscribe(() => {
      this.islogin = this.ValidatorChecker(this.tokenstorage.getToken())
    });
  }
  ngOnDestroy() {
    this.sub_fire_cloud_api?.unsubscribe();
  }
}
