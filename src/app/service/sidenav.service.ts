import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
// 侧滑菜单 控制服务
@Injectable()
export class SidenavService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({text: message});
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
