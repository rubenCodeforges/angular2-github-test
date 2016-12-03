import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {UserModelService} from "./_internal/user-model.service";
import {UserResourceService} from "./_internal/user-resource.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserModelService,
    UserResourceService
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
