import {Pipe, PipeTransform} from '@angular/core';
import {escapeHtml} from '@angular/platform-browser/src/browser/transfer_state';

@Pipe({
  name: 'cust_html'
})
// 格式化html 去掉标签, 用于显示文章详情 简易title
export class CustHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.reformNoticeContent(value);
  }

  reformNoticeContent(content): string {

    content = content.split('');
    let tagBoolean = false;
    content.forEach((c, index) => {
      if ('<' === c) {
        tagBoolean = true;
      } else if ('>' === c) {
        content[index] = '';
        tagBoolean = false;
        // continue;  如果是JavaScript可以添加这句代码，angular4不行。
      }
      if (tagBoolean) {
        content[index] = '';
      }
    });
    content = content.join('');
    return content;
  }
}
