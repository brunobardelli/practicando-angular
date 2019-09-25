import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'example', 
    loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule)
  }, 
  { path: 'articles', 
  loadChildren: () => import('./modules/articles/articles.module').then(m => m.ArticlesModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'example-list', loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule) },
  { path: 'articles-list', loadChildren: () => import('./modules/articles/articles.module').then(m => m.ArticlesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
