import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ListComponent, NewComponent, EditComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, ContactRoutingModule],
})
export class ContactModule {}
