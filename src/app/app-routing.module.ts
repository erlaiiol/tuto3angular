import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { BlablaComponent }      from './blabla/blabla.component';
import { MenuComponent }        from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'signup', component: BlablaComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: '', component: UserProfileComponent}
  ];

  @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}