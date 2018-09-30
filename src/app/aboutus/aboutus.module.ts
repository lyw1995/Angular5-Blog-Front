import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutusComponent} from './aboutus.component';
import {AboutusRoutingModule} from '../routing/aboutus.routing.module';
import {MatCardModule, MatDividerModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AboutusRoutingModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
  ],
  declarations: [AboutusComponent]
})
// 关于我
export class AboutusModule {
}
