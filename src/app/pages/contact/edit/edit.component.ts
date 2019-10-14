import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { Toast } from 'src/app/utils/toast';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less'],
})
export class EditComponent implements OnInit {
  contactId = this.route.snapshot.params.id;

  contactFrom = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\d{8}$/,
        ),
      ],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.contactService.show(this.contactId).subscribe((contact: Contact) => {
      const { id, userId, ...newContact } = contact;
      console.log(newContact);

      this.contactFrom.setValue(newContact);
    });
  }

  get name() {
    return this.contactFrom.get('name');
  }

  get email() {
    return this.contactFrom.get('email');
  }

  get phone() {
    return this.contactFrom.get('phone');
  }

  onSubmit() {
    this.contactService
      .update(this.contactId, this.contactFrom.value)
      .subscribe(() => {
        Toast.fire({
          type: 'success',
          title: '更新成功',
        });
      });
  }
}
