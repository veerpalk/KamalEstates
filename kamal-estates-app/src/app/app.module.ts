import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BuyingPropertyComponent } from './Property type/buying-property/buying-property.component';
import { SellingPropertyComponent } from './Property type/selling-property/selling-property.component';
import { RentingPropertyComponent } from './Property type/renting-property/renting-property.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarHeaderComponent } from './common/navbar-header/navbar-header.component';
import { NavbarFooterComponent } from './common/navbar-footer/navbar-footer.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'about',      component: AboutComponent },
  {path:'property/buying', component:BuyingPropertyComponent},
  {path:'property/selling', component:SellingPropertyComponent},
  {path:'property/renting', component:RentingPropertyComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    BuyingPropertyComponent,
    SellingPropertyComponent,
    RentingPropertyComponent,
    PageNotFoundComponent,
    NavbarHeaderComponent,
    NavbarFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,{ enableTracing: true } // <-- debugging purposes only
        )
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
