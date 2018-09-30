import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecommendComponent} from '../recommend/recommend.component';

const routes: Routes = [
  {
    path: '', component: RecommendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// 热文推荐路由配置
export class RecommendRoutingModule {
}
