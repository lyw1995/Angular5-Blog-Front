import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BaseService} from './base.service';
import {environment} from '../../environments/environment';

const baseUrl = environment.baseUrl;
const v1 = '/api/v1';
const userUrl = v1 + '/users';
const categoryUrl = '/categorys';
const articleUrl = '/articles';
const linkUrl = '/links';
const secertKey = 'UQPdFMLjszp35gpj';
import {Md5} from 'ts-md5';
// blog 服务, 提供整个前端接口调用
@Injectable()
export class BlogService extends BaseService {
  initBlog(next?: (value: any) => void, error?: (error: any) => void) {
    const signValue: string = Md5.hashStr(userUrl + secertKey).toString();
    this.get(baseUrl + userUrl, signValue, {}, next, error);
  }

  isInit(): Boolean {
    const user_id = localStorage.getItem('user_id');
    if (user_id === null || user_id === undefined) {
      return false;
    }
    return true;
  }

  getUserInfo(next?: (value: any) => void, error?: (error: any) => void) {
    const url = userUrl + '/' + localStorage.getItem('user_id');
    const signValue: string = Md5.hashStr(url + secertKey).toString();
    this.get(baseUrl + url, signValue, {}, next, error);
  }

  getUserLinks(next?: (value: any) => void, error?: (error: any) => void) {
    const url = userUrl + '/' + localStorage.getItem('user_id') + linkUrl;
    const signValue: string = Md5.hashStr(url + secertKey).toString();
    this.get(baseUrl + url, signValue, {}, next, error);
  }

  getCategoryByUserId(next?: (value: any) => void, error?: (error: any) => void) {
    const url = userUrl + '/' + localStorage.getItem('user_id') + categoryUrl;
    const signValue: string = Md5.hashStr(url + secertKey).toString();
    this.get(baseUrl + url, signValue, {}, next, error);
  }

  getAllArticles(page: string, sort: string, next?: (value: any) => void, error?: (error: any) => void) {
    let url = userUrl + '/' + localStorage.getItem('user_id') + articleUrl;
    const signValue: string = Md5.hashStr(url + secertKey).toString();
    url += '?page=' + page + '&published=true&sort=' + sort;
    this.get(baseUrl + url, signValue, {}, next, error);
  }

  getArticleByAid(aid: string, next?: (value: any) => void, error?: (error: any) => void) {
    const url = userUrl + '/' + localStorage.getItem('user_id') + articleUrl + '/' + aid;
    const signValue: string = Md5.hashStr(url + secertKey).toString();
    this.get(baseUrl + url, signValue, {}, next, error);
  }

  getHotAndNewArticles(next?: (value: any) => void, error?: (error: any) => void) {
    const user_id = localStorage.getItem('user_id');
    const url = userUrl + '/' + user_id + '/other';
    const signValue: string = Md5.hashStr(url + secertKey).toString();
    this.get(baseUrl + url, signValue, {}, next, error);
  }

  getAllArticlesByCid(cid: string, page: string, sort: string, next?: (value: any) => void, error?: (error: any) => void) {
    let url = userUrl + '/' + localStorage.getItem('user_id') + categoryUrl + '/' + cid + articleUrl;
    const signValue: string = Md5.hashStr(url + secertKey).toString();
    url += '?page=' + page + '&sort=' + sort;
    this.get(baseUrl + url, signValue, {}, next, error);
  }
}
