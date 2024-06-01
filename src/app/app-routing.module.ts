import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BuyComponent } from './components/buy/buy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgetpass', component: ForgetPasswordComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
