import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'signup', component: SignupComponent, data: { title: 'Signup' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule { }
