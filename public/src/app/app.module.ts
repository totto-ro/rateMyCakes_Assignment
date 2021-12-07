import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainComponent } from './main/main.component';
import { CakeComponent } from './cake/cake.component';
import { CommentComponent } from './comment/comment.component';
import { CakeService } from './main/cake.service';
import { ShowItemComponent } from './show-item/show-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CakeComponent,
    CommentComponent,
    ShowItemComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
