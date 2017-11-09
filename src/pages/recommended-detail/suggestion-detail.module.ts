import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Component } from "@angular/core/";
import { SuggestionDetailPage } from './suggestion-detail';


@NgModule({
  declarations: [
    SuggestionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SuggestionDetailPage),
    TranslateModule.forChild()
    
  ],
  exports: [
    SuggestionDetailPage
  ]
})
export class SuggestionDetailPageModule { }
