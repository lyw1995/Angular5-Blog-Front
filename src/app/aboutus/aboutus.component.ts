import {Component, OnInit} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  userData = null;
  userLinks = [];

  constructor(private bs: BlogService, private router: Router) {
  }

  ngOnInit() {
    if (this.bs.isInit()) {
      this.bs.getUserInfo(value => {
        this.userData = value['data'];
      });
      this.bs.getUserLinks(value => {
        this.userLinks = value['data'];
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
