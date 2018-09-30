import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component, DoCheck, Input, KeyValueDiffers,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';
import {HighlightService} from '../service/highlight.service';

@Component({
  selector: 'app-artdetail',
  templateUrl: './artdetail.component.html',
  styleUrls: ['./artdetail.component.css']
})
export class ArtdetailComponent implements OnInit {
  contentData = null;
  aid = -1;

  constructor(private route: ActivatedRoute, private bs: BlogService, private router: Router, private hs: HighlightService) {
    this.route.params.subscribe(data => {
      this.aid = data['id'];

      if (this.aid === undefined) {
        this.aid = parseInt(localStorage.getItem('hot_id'), 10);
      }
      if ((this.aid !== undefined || this.aid !== -1) && this.bs.isInit()) {
        this.bs.getArticleByAid(this.aid + '', value => {
          this.contentData = value['data'];
          this.hs.contentSub.next(this.contentData);
        });
      } else {
        setTimeout(() => {
          if (isNaN(this.aid)) {
            return;
          }
          this.bs.getArticleByAid(this.aid + '', value => {
            this.contentData = value['data'];
            this.hs.contentSub.next(this.contentData);
          });
        }, 300);
      }
    });
  }

  ngOnInit() {
    this.hs.contentSub.subscribe(data => {
      if (data != null) {
        setTimeout(() => {
          $('pre').each(function (i, block) {
            hljs.highlightBlock(block);
          });
        }, 100);
      }
    });
  }
}
