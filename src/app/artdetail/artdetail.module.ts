import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArtdetailComponent} from './artdetail.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {SafehtmlPipe} from '../pipe/safehtml.pipe';
import {HighlightService} from '../service/highlight.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [HighlightService],
  declarations: [ArtdetailComponent, SafehtmlPipe]
})
// 文章详情
export class ArtdetailModule {
}
