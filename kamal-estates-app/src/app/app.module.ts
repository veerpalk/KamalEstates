import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
import { AgmCoreModule } from '@agm/core';
import { QueryComponent } from './common/query/query.component';
import { TopTenPropertiesComponent } from './top-ten-properties/top-ten-properties.component';
import { PropertySearchComponent } from './common/property-search/property-search.component'; 

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
    NavbarFooterComponent,
    QueryComponent,
    TopTenPropertiesComponent,
    PropertySearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,{ enableTracing: true } // <-- debugging purposes only
        ),

        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyB-sU_jyyipmz04fwYYcvH7sFws-oRCaw4'
        }),

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
