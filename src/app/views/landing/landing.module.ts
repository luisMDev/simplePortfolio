import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectComponent } from '@app/components/project/project.component';
import { JumboComponent } from '@app/components/jumbo/jumbo.component';
import { PostComponent } from '@app/components/post/post.component';
import { StoreService } from '@app/services/store.service';
import { BarComponent } from '@app/components/bar/bar.component';
import { JobComponent } from '@app/components/job/job.component';

const routes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule.forChild()],
  declarations: [LandingComponent, ProjectComponent, JumboComponent, PostComponent, BarComponent, JobComponent],
  providers: [StoreService]
})
export class LandingModule {}
