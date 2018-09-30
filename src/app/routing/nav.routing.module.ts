import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArtlistComponent} from '../artlist/artlist.component';
import {ArtdetailComponent} from '../artdetail/artdetail.component';
import {SideNavComponent} from '../side-nav/side-nav.component';

const routes: Routes = [
  {
    path: '', component: SideNavComponent,
    children: [
      {
        path: '',
        component: ArtlistComponent
      },
      {
        path: 'category/:id',
        component: ArtlistComponent
      },
      {
        path: 'detail/:id',
        component: ArtdetailComponent
      },
      {
        path: 'detail',
        component: ArtdetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// 侧滑菜单路由配置
export class NavRoutingModule {
}
