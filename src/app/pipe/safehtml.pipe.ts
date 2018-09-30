import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
// 显示html 带样式
export class SafehtmlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(html: string, args: any[]): any {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
