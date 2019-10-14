import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Toast, Confirm } from 'src/app/utils/toast';
import { Tag } from 'src/app/models/tag.model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  contacts: Contact[];
  tags: Tag[];
  constructor(
    private contactService: ContactService,
    private tagService: TagService,
  ) {}

  ngOnInit() {
    this.contactService.index().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
    this.tagService.index().subscribe((tags: Tag[]) => {
      this.tags = tags;
    });
  }

  delete(contactId: number) {
    Confirm.fire({
      title: '确定要删除吗？',
      text: '删除后数据不能再恢复',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: '是的',
      cancelButtonText: '取消',
    }).then(({ value: bool }) => {
      if (bool) {
        this.contactService.delete(contactId).subscribe(() => {
          this.contacts = this.contacts.filter(c => c.id !== contactId);
          Toast.fire({
            type: 'success',
            title: '删除成功',
          });
        });
      }
    });
  }

  getTag(tagId: number): string {
    if (this.tags) {
      const index = this.tags.findIndex(t => +t.id === +tagId);
      if (index !== -1) {
        return this.tags[index].title || '';
      }
      return '默认';
    }
  }
}
