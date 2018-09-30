import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './side-nav.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {LayoutModule, MediaMatcher} from '@angular/cdk/layout';
import {SideNavDrawerComponent} from '../side-nav-drawer/side-nav-drawer.component';
import {CdkScrollable} from '@angular/cdk/scrolling';
import {PortalModule} from '@angular/cdk/portal';
import {NavRoutingModule} from '../routing/nav.routing.module';
import {ArtlistModule} from '../artlist/artlist.module';
import {SideNavDrawerModule} from '../side-nav-drawer/side-nav-drawer.module';
import {ArtdetailModule} from '../artdetail/artdetail.module';
import {SidenavService} from '../service/sidenav.service';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    NavRoutingModule,
    ArtlistModule,
    ArtdetailModule,
    SideNavDrawerModule
  ],
  declarations: [SideNavComponent],
  providers: [MediaMatcher, SidenavService],
})
export class SideNavModule {
}
