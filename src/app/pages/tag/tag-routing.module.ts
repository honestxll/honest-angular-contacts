import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: 'tags',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'edit',
        component: EditComponent
      },
      {
        path: 'new',
        component: NewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule {}
