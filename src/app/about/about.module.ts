import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
