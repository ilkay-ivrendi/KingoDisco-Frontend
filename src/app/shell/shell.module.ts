import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AuthModule,
    RouterModule
  ]
})
export class ShellModule { }
