import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Toast } from 'src/app/utils/toast';
import { Router } from '@angular/router';
import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {}

  onSubmit(contactForm: Contact) {
    const observer = {
      next: () => {
        Toast.fire({
          type: 'success',
          title: '添加成功',
        });
        setTimeout(() => {
          this.router.navigateByUrl('/contacts');
        }, 1500);
      },
      error: () => {
        Toast.fire({
          type: 'error',
          title: '添加失败',
        });
      },
    };
    return this.contactService.store(contactForm).subscribe(observer);
  }
}
