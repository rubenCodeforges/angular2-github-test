import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {UsersModule} from "./users/users.module";
import { NavBarComponent } from './navBar/nav-bar/nav-bar.component';

const appRoutes: Routes = [
  {path: 'users/:userName', component: UsersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    UsersModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
