import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Tag } from '../../../models/tag.model';
import { TagService } from '../../../services/tag.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FormComponent implements OnInit {
  @Input() isEdit: boolean;

  @Output()
  formSubmit = new EventEmitter();

  tagForm = this.formBuilder.group({
    title: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private tagService: TagService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    if (this.isEdit) {
      const tagId = this.route.snapshot.params.id;
      this.tagService.show(tagId).subscribe((tag: Tag) => {
        const { id, ...newTag } = tag;
        this.tagForm.setValue(newTag);
      });
    }
  }

  get title() {
    return this.tagForm.get('title');
  }

  onSubmit() {
    this.formSubmit.emit(this.tagForm.value);
  }
}
