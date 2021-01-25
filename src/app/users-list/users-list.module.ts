import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersListPageRoutingModule } from './users-list-routing.module';

import { UsersListPage } from './users-list.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersListPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [UsersListPage]
})
export class UsersListPageModule {}
