import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateAccountComponent } from './pages/login/create-account/create-account.component';
import { ForgetPasswordComponent } from './pages/login/forget-password/forget-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'create', component: CreateAccountComponent},
  { path: 'forget', component: ForgetPasswordComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'contato', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
