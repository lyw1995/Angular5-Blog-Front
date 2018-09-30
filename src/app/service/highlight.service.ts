import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

// 文章详情 代码高亮
@Injectable()
export class HighlightService {
  contentSub: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }
}
