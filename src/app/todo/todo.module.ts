import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { MaterialModule } from '../module/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
