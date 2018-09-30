import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material';
import {Title} from '@angular/platform-browser';
import {SidenavService} from '../service/sidenav.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
// 侧滑菜单
export class SideNavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  @ViewChild(MatSidenav)
  nav: MatSidenav;
  private _mobileQueryListener: () => void;
  title = '文章列表';
  subscription: Subscription;

  constructor(private titleService: Title,
              private sideNavService: SidenavService,
              private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.initSideService();

    this.mobileQuery = media.matchMedia('(max-width: 720px)');
    this._mobileQueryListener = () => {
      if (!this.mobileQuery.matches && this.nav !== undefined) {
        this.nav.close();
      }
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  getTitle(title: string) {
    this.title = title;
    // this.titleService.setTitle(title + '|Track的博客');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe();
  }

  initSideService() {
    this.subscription = this.sideNavService
      .getMessage().subscribe(message => {
        if (message['text'] === 'close') {
          if (this.mobileQuery.matches && this.nav !== undefined) {
            this.nav.close();
            this.changeDetectorRef.detectChanges();
          }
        }
      });
  }

  ngOnInit() {

    if (this.nav !== undefined && this.nav.opened) {
      this.nav.close();
    }
  }

  toggle() {
    if (this.nav !== undefined) {
      this.nav.open();
    }
  }


}
