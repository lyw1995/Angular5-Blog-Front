import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SidenavService} from '../service/sidenav.service';
import {BlogService} from '../service/blog.service';

@Component({
  selector: 'app-side-nav-drawer',
  templateUrl: './side-nav-drawer.component.html',
  styleUrls: ['./side-nav-drawer.component.css'],
})
// 侧滑组件
export class SideNavDrawerComponent implements OnInit {
  isShowProfile: Boolean;
  profileData = null;
  howAndNewArticles = null;
  @Output() titleEmitter = new EventEmitter<string>();

  pushTitle(title: string) {
    this.titleEmitter.emit(title);
    this.sideNavService.sendMessage('close');
  }

  constructor(private router: Router, private sideNavService: SidenavService,
              private route: ActivatedRoute, private bs: BlogService) {
  }

  ngOnInit() {
    this.changePage();
    if (this.isShowProfile) {
      if (this.bs.isInit()) {
        this.bs.getCategoryByUserId(value => {
          this.profileData = value['data'];
        });
      } else {
        setTimeout(() => {
          this.bs.getCategoryByUserId(value => {
            this.profileData = value['data'];
          });
        }, 300);
      }
    } else {
      setTimeout(() => {

      }, 300);
      if (this.bs.isInit()) {
        this.bs.getHotAndNewArticles(value => {
          this.howAndNewArticles = value['data'];
          localStorage.setItem('hot_id', this.howAndNewArticles['hot_articles'][0]['aid']);
        });
      } else {
        setTimeout(() => {
          this.bs.getHotAndNewArticles(value => {
            this.howAndNewArticles = value['data'];
            localStorage.setItem('hot_id', this.howAndNewArticles['hot_articles'][0]['aid']);
          });
        }, 300);
      }
    }
  }

  closeSlide() {
    this.sideNavService.sendMessage('close');
  }

  changePage() {
    if (window.location.href.indexOf('recommend') === -1) {
      this.titleEmitter.emit('文章列表');
      this.isShowProfile = true;
    } else {
      this.titleEmitter.emit('热文推荐');
      this.isShowProfile = false;
    }
  }
}
