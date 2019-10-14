import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Toast, Confirm } from 'src/app/utils/toast';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  contacts: Contact[];
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.index().subscribe((data: Contact[]) => {
      this.contacts = data;
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
}
