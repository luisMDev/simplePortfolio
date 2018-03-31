import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  constructor() {}

  getBars() {
    return new Promise(resolve => {
      const data = [
        { num: 90, title: 'bar1' },
        { num: 80, title: 'bar2' },
        { num: 95, title: 'bar3' },
        { num: 75, title: 'bar4' },
        { num: 80, title: 'bar5' },
        { num: 30, title: 'bar6' },
        { num: 40, title: 'bar7' }
      ];
      resolve(data);
    });
  }

  getSocialMedia() {
    return new Promise(resolve => {
      const data = [{ icon: '', url: '' }, { icon: '', url: '' }, { icon: '', url: '' }];
      resolve(data);
    });
  }

  getProjectList() {
    return new Promise(resolve => {
      const data = [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Fcosplayapp.png?alt=media&token=b20bf83c-d4cf-422d-81aa-7d4fe7425289',
          time: 'project1Time',
          title: 'project1Title',
          desc: 'project1Text',
          url: 'https://cosplayapp.net/'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Fpeugeot.png?alt=media&token=d151a4de-78ee-4526-8fbe-aa3aca466be9',
          time: 'project2Time',
          title: 'project2Title',
          desc: 'project2Text',
          url: 'https://reunionespeugeot.es/'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Femanager.png?alt=media&token=98577225-4c2d-40fb-a875-0ea5d39af9c9',
          time: 'project3Time',
          title: 'project3Title',
          desc: 'project3Text',
          url: 'https://emanager.gg'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Ficofolio.png?alt=media&token=90ca73f9-ee83-4f62-9f80-cc146cc96fd9',
          time: 'project4Time',
          title: 'project4Title',
          desc: 'project4Text',
          url: 'https://ico-list-ba66a.firebaseapp.com/'
        }
      ];
      resolve(data);
    });
  }

  getPostList() {
    return new Promise(resolve => {
      const data = [];
      resolve(data);
    });
  }

  getJobList() {
    return new Promise(resolve => {
      const data = [
        {
          img: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMAAgQIAAkAAQAAAAAAAA_xAAAAJDljYTdkMDljLTRmYmUtNDc4Mi05ZWZlLWEzNTNiMjYxYzlmNQ.bin',
          time: 'job1Time',
          title: 'job1Title',
          job: 'job1Subtitle',
          desc: 'job1Text',
          url: 'https://cosplayapp.net/'
        },
        {
          img: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMABAQIAAkAAQAAAAAAABAPAAAAJDA3ZmU5MDA1LTk1ZDYtNDUyYi04YjFmLTk1NDJlZmU5M2JiMA.bin',
          time: 'job2Time',
          title: 'job2Title',
          job: 'job2Subtitle',
          desc: 'job2Text'
        },
        {
          img: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMABAQIAAkAAQAAAAAAABAPAAAAJDA3ZmU5MDA1LTk1ZDYtNDUyYi04YjFmLTk1NDJlZmU5M2JiMA.bin',
          time: 'job3Time',
          title: 'job3Title',
          job: 'job3Subtitle',
          desc: 'job3Text'
        },
        {
          img: 'http://www.agruposistemas.es/img/logo.png',
          time: 'job4Time',
          title: 'job4Title',
          job: 'job4Subtitle',
          desc: 'job4Text'
        },
        {
          img: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAMAAgQIAAkAAQAAAAAAABDOAAAAJGVlMzEzNzk1LWEwYWQtNDBmNC04MzEzLTYwM2YwMjIwY2MzMg.bin',
          time: 'job5Time',
          title: 'job5Title',
          job: 'job5Subtitle',
          desc: 'job5Text'
        }
      ];
      resolve(data);
    });
  }
}
