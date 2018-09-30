import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/article',
    pathMatch: 'full'
  },
  {
    path: 'article',
    loadChildren: 'app/side-nav/side-nav.module#SideNavModule'
  },
  {
    path: 'recommend',
    loadChildren: 'app/side-nav/side-nav.module#SideNavModule',
  },
  {
    path: 'about',
    loadChildren: 'app/aboutus/aboutus.module#AboutusModule'
  }, {
    path: '**',
    redirectTo: '/article'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// app 路由配置
export class AppRoutingModule {
}
