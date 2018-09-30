import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutusComponent} from '../aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '', component: AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// 关于我 路由配置
export class AboutusRoutingModule {
}
