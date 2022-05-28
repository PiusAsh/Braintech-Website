import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { CardsComponent } from './cards/cards.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BodyComponent } from './ABOUT-PAGE/body/body.component';
import { ContactBodyComponent } from './CONTACT-PAGE/contact-body/contact-body.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CardsComponent,
    PricingComponent,
    SubscribeComponent,
    TestimonialsComponent,
    BodyComponent,
    ContactBodyComponent,
    HomeComponent,
    ServicesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
