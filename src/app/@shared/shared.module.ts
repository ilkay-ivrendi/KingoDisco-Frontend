import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LoaderComponent, ButtonComponent]
})
export class SharedModule { }
