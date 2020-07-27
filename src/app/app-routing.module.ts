import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./portal/portal-home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./portal/portal-detail/detail.module').then( m => m.DetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
