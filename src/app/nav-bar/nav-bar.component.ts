import {Component, OnInit} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
// 顶部导航栏
export class NavBarComponent implements OnInit {
  title = '';
  avator = '';

  constructor(private bs: BlogService, private ts: Title) {
    bs.initBlog(value => {
      localStorage.setItem('user_id', value['data']['user_id']);
      localStorage.setItem('nick_name', value['data']['nick_name']);
      localStorage.setItem('user_avator', value['data']['user_avator']);
      this.ts.setTitle(value['data']['nick_name'] + '的博客');
      this.title = localStorage.getItem('nick_name') + '的博客';
      this.avator = localStorage.getItem('user_avator');
    });
  }

  ngOnInit() {
  }

}
