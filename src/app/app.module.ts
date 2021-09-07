import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TopCardComponent } from './body/top-card.component';
import { TopFeaturesComponent } from './body/top-features.component';
import { TopNavBarComponent2 } from './header/top-nav-bar-2.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBarComponent2,
    TopCardComponent,
    TopFeaturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
