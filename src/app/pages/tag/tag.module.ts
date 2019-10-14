import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, EditComponent, NewComponent],
  imports: [CommonModule, ReactiveFormsModule, TagRoutingModule],
})
export class TagModule {}
