import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendComponent } from './recommend.component';
import {RecommendRoutingModule} from '../routing/recommend.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RecommendRoutingModule
  ],
  declarations: [RecommendComponent]
})
export class RecommendModule { }
