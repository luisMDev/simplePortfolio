import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/services/store.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public projectList;
  public postList;
  public barList;
  public jobList;

  constructor(private _storeService: StoreService) {}

  ngOnInit() {
    this._storeService.getProjectList().then(projectList => {
      this.projectList = projectList;
    });

    this._storeService.getPostList().then(postList => {
      this.postList = postList;
    });

    this._storeService.getBars().then(barList => {
      this.barList = barList;
    });

    this._storeService.getJobList().then(jobList => {
      this.jobList = jobList;
    });
  }
}
