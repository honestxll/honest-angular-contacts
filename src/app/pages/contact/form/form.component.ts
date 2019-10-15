import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../../../models/tag.model';
import { Validators, FormBuilder } from '@angular/forms';
import { TagService } from '../../../services/tag.service';
import { ContactService } from '../../../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FormComponent implements OnInit {
  @Input() isEdit: boolean;

  @Output() formSubmit = new EventEmitter();

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
    private tagService: TagService,
    private contactService: ContactService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.tagService.index().subscribe((tags: Tag[]) => {
      this.tags = tags;
    });

    if (this.isEdit) {
      const contactId = this.route.snapshot.params.id;
      this.contactService.show(contactId).subscribe((contact: Contact) => {
        const { id, userId, ...newContact } = contact;
        console.log(newContact);

        this.contactForm.setValue(newContact);
      });
    }
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
    if (this.contactForm.value) {
      this.formSubmit.emit(this.contactForm.value);
    }
  }
}
