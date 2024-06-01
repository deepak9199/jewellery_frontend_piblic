import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { SignUPComponent } from './components/auth/sign-up/sign-up.component';
import { BuyComponent } from './components/buy/buy.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './shared/_guards/guard';
import { firebaseConfig } from './shared/bsaeUrl/firebaseconfig';
import { LoadingComponent } from './shared/loading/loading.component';
import { NavComponent } from './shared/nav/nav.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SideComponent } from './shared/side/side.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoadingComponent,
    PageNotFoundComponent,
    SideComponent,
    NavComponent,
    HomeComponent,
    ProfileComponent,
    CartComponent,
    ShopComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    ForgetPasswordComponent,
    LogoutComponent,
    SignUPComponent,
    BuyComponent,
    CheckOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    CarouselModule 
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
