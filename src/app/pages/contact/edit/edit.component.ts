import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Toast } from 'src/app/utils/toast';
import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less'],
})
export class EditComponent implements OnInit {
  contactId = this.route.snapshot.params.id;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {}

  onSubmit(contactForm: Contact) {
    this.contactService.update(this.contactId, contactForm).subscribe(() => {
      Toast.fire({
        type: 'success',
        title: '更新成功',
      });

      setTimeout(() => {
        this.router.navigateByUrl('/contacts');
      }, 1500);
    });
  }
}
