import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

// 基类服务, 接口sign. 统一get请求
@Injectable()
export class BaseService {
  constructor(protected http: HttpClient) {
  }

  // 签名sign
  sign(signValue: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Sign': signValue
    });
  }

  // 统一Get 请求 响应返回
  get(url: string, singValue: string, body: {
    [param: string]: string | string[];
  }, next?: (value: any) => void, error?: (error: any) => void, complete?: () => void) {
    const headers = this.sign(singValue);
    return this.http.get(url, {
      headers: headers, params: new HttpParams({
        fromObject: body
      }),
    }).subscribe(
      next, error, complete
    );
  }
}
