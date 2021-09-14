import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TopCardComponent } from './body/top-card.component';
import { TopFeaturesComponent } from './body/top-features.component';
import { EntertainmentComponent } from './header/entertainment.component';
import { SportsComponent } from './header/sports.component';
import { TopNavBarComponent2 } from './header/top-nav-bar-2.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './Layout/layout-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBarComponent2,
    TopCardComponent,
    TopFeaturesComponent,
    LayoutMainComponent,
    SportsComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
