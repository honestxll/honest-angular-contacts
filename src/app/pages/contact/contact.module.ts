import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [ContactComponent, ListComponent, NewComponent, EditComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
