import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks-board',
    pathMatch:'full'
  },
  {
    path: 'tasks-board',
    loadChildren: () => import('./modules/tasks-bard/tasks-bard.module').then(m => m.TasksBardModule),
    data: { title: 'tasks-board'}
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
