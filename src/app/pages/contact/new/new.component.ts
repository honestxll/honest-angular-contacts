import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Toast } from 'src/app/utils/toast';
import { Router } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/tag.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
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
  ) {}

  ngOnInit() {
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
    return this.contactService
      .store(this.contactForm.value)
      .subscribe(observer);
  }
}
