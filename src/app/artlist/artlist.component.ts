import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogService} from '../service/blog.service';

@Component({
  selector: 'app-artlist',
  templateUrl: './artlist.component.html',
  styleUrls: ['./artlist.component.css']
})
// 文章列表
export class ArtlistComponent implements OnInit {
  userArticles = [];
  cid = -1;
  ds = true;
  cs = false;
  vs = false;
  totalCount = -1;
  pageIndex = 0;
  defaultS = '';

  constructor(private router: Router, private route: ActivatedRoute, private bs: BlogService) {
    this.route.params.subscribe(data => {
      this.cid = data['id'];
      if (bs.isInit()) {
        this.getArticlesByCid();
      } else {
        setTimeout(() => {
          this.getArticlesByCid();
        }, 300);
      }
    });
  }

  ngOnInit() {
  }

  getArticlesByCid() {
    if (this.cid === undefined) {
      // 获取全部
      this.bs.getAllArticles(this.pageIndex + '', this.defaultS, value => {
        this.userArticles = value['data']['articles'];
        this.totalCount = value['data']['count'];
        this.ds = true;
        this.cs = false;
        this.vs = false;
      });
    } else {
      this.bs.getAllArticlesByCid(this.cid + '', this.pageIndex + '', this.defaultS, value => {
        this.userArticles = value['data']['articles'];
        this.totalCount = value['data']['count'];
        this.ds = true;
        this.cs = false;
        this.vs = false;
      });
    }
  }

  defaultSort() {
    if (this.defaultS === '') {
      return;
    }
    this.defaultS = '';
    if (this.cid === undefined) {
      // 获取全部
      this.bs.getAllArticles(this.pageIndex + '', this.defaultS, value => {
        this.userArticles = value['data']['articles'];
        this.ds = true;
        this.cs = false;
        this.vs = false;
      });
    } else {
      this.bs.getAllArticlesByCid(this.cid + '', this.pageIndex + '', this.defaultS, value => {
        this.userArticles = value['data']['articles'];
        this.ds = true;
        this.cs = false;
        this.vs = false;
      });
    }
  }

  sortByCreate_time() {
    if (this.defaultS === 'create_time,desc') {
      return;
    }
    this.defaultS = 'create_time,desc';
    if (this.cid === undefined) {
      this.bs.getAllArticles(this.pageIndex + '', this.defaultS, value => {
        this.userArticles = value['data']['articles'];
        this.ds = false;
        this.cs = true;
        this.vs = false;
      });
    } else {
      this.bs.getAllArticlesByCid(this.cid + '', this.pageIndex + '', this.defaultS, value => {
        this.userArticles = value['data']['articles'];
        this.ds = false;
        this.cs = true;
        this.vs = false;
      });
    }
  }

  sortByViews() {
    if (this.defaultS === 'views,desc') {
      return;
    }
    this.defaultS = 'views,desc';
    if (this.cid === undefined) {
      this.bs.getAllArticles(this.pageIndex + '', this.defaultS, value => {
        this.userArticles = value['data']['articles'];
        this.ds = false;
        this.cs = false;
        this.vs = true;
      });
    } else {
      this.bs.getAllArticlesByCid(this.cid + '', this.pageIndex + '', this.defaultS, value => {
        this.userArticles = value['data']['articles'];
        this.ds = false;
        this.cs = false;
        this.vs = true;
      });
    }
  }

  change(e: any) {
    this.pageIndex = e['pageIndex'];
    if (this.ds) {
      this.defaultSort();
    } else if (this.cs) {
      this.sortByCreate_time();
    } else if (this.vs) {
      this.sortByViews();
    }
  }
}
