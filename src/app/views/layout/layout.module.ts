import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '@app/views/landing/landing.component';
import { NavBarComponent } from '@app/components/nav-bar/nav-bar.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { LanguageSwitcherComponent } from '@app/components/language-switcher/language-switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { SocialComponent } from '@app/components/social/social.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', pathMatch: 'full', redirectTo: 'landing' }, { path: 'landing', loadChildren: '../landing/landing.module#LandingModule' }]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule],
  declarations: [LayoutComponent, NavBarComponent, FooterComponent, LanguageSwitcherComponent, SocialComponent]
})
export class LayoutModule {}
