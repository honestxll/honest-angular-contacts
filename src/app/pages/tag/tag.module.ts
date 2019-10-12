import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [TagComponent, ListComponent, EditComponent, NewComponent],
  imports: [CommonModule, TagRoutingModule]
})
export class TagModule {}
