import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderPageModule } from '../header/header.module';
import { RecommendedListMasterPage } from './recommendedList-master';

@NgModule({
  declarations: [
    RecommendedListMasterPage,
  ],
  imports: [
  HeaderPageModule,
    IonicPageModule.forChild(RecommendedListMasterPage),
    TranslateModule.forChild()
  ],
  exports: [
    RecommendedListMasterPage
  ]
})
export class RecommendedListMasterPageModule { }
