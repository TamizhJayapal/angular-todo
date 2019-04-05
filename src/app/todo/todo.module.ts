import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { MaterialModule } from '../module/material/material.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
