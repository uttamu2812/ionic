import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Component } from "@angular/core/";
import { SuggestionDetailPage } from './suggestion-detail';


@NgModule({
  declarations: [
    SuggestionDetailPage,
  ],providers:[
  GoogleMaps
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
