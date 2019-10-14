import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TagService } from 'src/app/services/tag.service';
import { Toast } from 'src/app/utils/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  tagForm = this.formBuilder.group({
    title: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private tagService: TagService,
    private router: Router,
  ) {}

  ngOnInit() {}

  get title() {
    return this.tagForm.get('title');
  }

  onSubmit() {
    this.tagService.store(this.tagForm.value).subscribe(() => {
      Toast.fire({
        type: 'success',
        title: '保存成功',
      });
      setTimeout(() => {
        this.router.navigateByUrl('/tags');
      }, 1500);
    });
  }
}
