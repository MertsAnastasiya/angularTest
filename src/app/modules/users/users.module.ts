import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { UserContainerComponent } from './user-container/user-container.component';
import { UsersApiService } from "./services/users-api.service";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    UserContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    UsersApiService,
  ],
  exports: [UserContainerComponent]
})
export class UsersModule { }
