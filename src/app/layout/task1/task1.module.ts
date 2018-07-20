import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Task1Component} from './task1.component';
import {CommonModule} from '@angular/common';
import { MockDataService } from '../../shared/mock-data.service';
import { MaterialDesignModule } from '../../shared/material-design.module';

export const routes = [
  {path: '', component:Task1Component, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    Task1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), MaterialDesignModule
  ],
  providers: [MockDataService]
})
export class Task1Module {
  static routes = routes;
}
