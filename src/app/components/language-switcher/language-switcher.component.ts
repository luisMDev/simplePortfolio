import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  public language;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.language = this.translateService.currentLang;
  }

  switch(lang) {
    this.language = lang;
    this.translateService.use(lang);
    console.log(this.translateService.translations);

    console.log(this.translateService.currentLang);
  }
}
