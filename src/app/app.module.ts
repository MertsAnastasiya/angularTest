import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { UserContainerComponent } from "./modules/users/user-container/user-container.component";
import { UsersModule } from "./modules/users/users.module";

const appRoutes: Routes = [
  {
    path: 'navigator',
    component: UserContainerComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
