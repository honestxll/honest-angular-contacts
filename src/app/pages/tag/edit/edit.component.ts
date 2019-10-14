import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TagService } from 'src/app/services/tag.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Toast } from 'src/app/utils/toast';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less'],
})
export class EditComponent implements OnInit {
  tagId = this.route.snapshot.params.id;
  tagForm = this.formBuilder.group({
    title: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private tagService: TagService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.tagService.show(this.tagId).subscribe((tag: Tag) => {
      const { id, ...newTag } = tag;
      this.tagForm.setValue(newTag);
    });
  }

  get title() {
    return this.tagForm.get('title');
  }

  onSubmit() {
    this.tagService.update(this.tagId, this.tagForm.value).subscribe(() => {
      Toast.fire({
        type: 'success',
        title: '保存成功',
      });
    });
  }
}
