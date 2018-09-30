import {Component} from '@angular/core';
import {BlogService} from './service/blog.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-blog-material',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private bs: BlogService, private ts: Title) {
    // bs.initBlog(value => {
    //   localStorage.setItem('user_id', value['data']['user_id']);
    //   localStorage.setItem('nick_name', value['data']['nick_name']);
    //   localStorage.setItem('user_avator', value['data']['user_avator']);
    //   this.ts.setTitle(value['data']['nick_name'] + '的博客');
    // });
  }
}
