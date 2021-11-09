import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LayoutAuthComponent } from './Layout/Authentication/layout-auth.component';
import { LayoutCreateLeagueComponent } from './Layout/create-league/layout-create-league.component';
import { LayoutFantasyFootballComponent } from './Layout/fantasy-football/layout-fantasy-football.component';
import { LayoutJoinLeagueComponent } from './Layout/join-league/layout-join-league.component';
import { LayoutMainComponent } from './Layout/main/layout-main.component';
import { LayoutMockDraftComponent } from './Layout/mock-draft/layout-mock-draft.component';

const routes: Routes = [
  { path: 'create_league', component: LayoutCreateLeagueComponent },
  { path: 'join_league', component: LayoutJoinLeagueComponent },
  { path: 'mock_draft', component: LayoutMockDraftComponent },
  { path: 'fantasy_football', component: LayoutFantasyFootballComponent },
  { path: 'auth', component: LayoutAuthComponent},
  { path: '', component: LayoutMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
