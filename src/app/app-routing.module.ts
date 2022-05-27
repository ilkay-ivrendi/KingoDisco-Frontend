import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShellService } from '@shell/shell.service';

import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  ShellService.childRoutes([
    { path: 'user-profile', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
