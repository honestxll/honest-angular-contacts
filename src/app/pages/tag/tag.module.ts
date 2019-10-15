import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ListComponent, EditComponent, NewComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, TagRoutingModule],
})
export class TagModule {}
