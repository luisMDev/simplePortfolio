import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '@app/views/landing/landing.component';
import { NavBarComponent } from '@app/components/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'landing' },
      { path: 'landing', loadChildren: '../landing/landing.module#LandingModule' },
      { path: 'login', loadChildren: '../login/login.module#LoginModule' }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LayoutComponent, NavBarComponent]
})
export class LayoutModule {}
