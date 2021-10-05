import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TopCardComponent } from './body/main-page/top-card.component';
import { TopFeaturesComponent } from './body/main-page/top-features.component';
import { EntertainmentComponent } from './header/top-navbar/entertainment.component';
import { SportsComponent } from './header/top-navbar/sports.component';
import { TopNavBarComponent2 } from './header/second-navbar/top-nav-bar-2.component';
import { TopNavBarComponent } from './header/top-navbar/top-nav-bar.component';
import { LayoutCreateLeagueComponent } from './Layout/create-league/layout-create-league.component';
import { LayoutFantasyFootballComponent } from './Layout/fantasy-football/layout-fantasy-football.component';
import { LayoutJoinLeagueComponent } from './Layout/join-league/layout-join-league.component';
import { LayoutMainComponent } from './Layout/main/layout-main.component';
import { LayoutMockDraftComponent } from './Layout/mock-draft/layout-mock-draft.component';
import { AppRoutingModule } from './app-routing.module';
import { FantasyFootballHomeComponent } from './body/fantasy-football-page/fantasy-football-home.component';
import { LeagueCreationComponent } from './body/create-league-page/league-creation.component';
import { LeagueJoiningComponent } from './body/join-league-page/league-joining.component';
import { MockDraftingComponent } from './body/mock-draft-page/mock-drafting.component';
import { SignUpCardComponent } from './body/main-page/sign-up-card.component';
import { FriendsComponent } from './body/main-page/friends.component';
import { PhoneAppComponent } from './body/main-page/phone-app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBarComponent2,
    TopCardComponent,
    TopFeaturesComponent,
    LayoutMainComponent,
    SportsComponent,
    EntertainmentComponent,
    LayoutCreateLeagueComponent,
    LayoutJoinLeagueComponent,
    LayoutMockDraftComponent,
    LayoutFantasyFootballComponent,
    FantasyFootballHomeComponent,
    LeagueCreationComponent,
    LeagueJoiningComponent,
    MockDraftingComponent,
    SignUpCardComponent,
    FriendsComponent,
    PhoneAppComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
