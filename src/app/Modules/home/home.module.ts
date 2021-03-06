import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, MenuComponent, NavbarComponent, LandingComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    HomeComponent
  ]
})
export class HomeModule { }
