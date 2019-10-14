import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { Toast } from 'src/app/utils/toast';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/tag.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less'],
})
export class EditComponent implements OnInit {
  contactId = this.route.snapshot.params.id;

  tags: Tag[];

  contactForm = this.formBuilder.group({
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
    tagId: [0],
  });

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private tagService: TagService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.contactService.show(this.contactId).subscribe((contact: Contact) => {
      const { id, userId, ...newContact } = contact;
      console.log(newContact);

      this.contactForm.setValue(newContact);
    });

    this.tagService.index().subscribe((tags: Tag[]) => {
      this.tags = tags;
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  onSubmit() {
    this.contactService
      .update(this.contactId, this.contactForm.value)
      .subscribe(() => {
        Toast.fire({
          type: 'success',
          title: '更新成功',
        });
      });
  }
}
