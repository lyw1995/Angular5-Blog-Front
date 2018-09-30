import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavDrawerComponent} from './side-nav-drawer.component';
import {MatCardModule, MatGridListModule, MatIconModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [SideNavDrawerComponent],
  exports: [SideNavDrawerComponent],
})
export class SideNavDrawerModule {
}
