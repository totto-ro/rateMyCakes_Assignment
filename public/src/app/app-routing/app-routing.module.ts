import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { CakeComponent } from '../cake/cake.component';
import { CommentComponent } from '../comment/comment.component';


let routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'newCake',
    component: CakeComponent
  },
  {
    path: 'addComment',
    component: CommentComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/'
  },
  {
    path: '**',
    redirectTo: '/'
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
