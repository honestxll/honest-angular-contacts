import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'src/app/utils/toast';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less'],
})
export class EditComponent implements OnInit {
  tagId = this.route.snapshot.params.id;

  constructor(
    private tagService: TagService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {}

  onSubmit(tagForm) {
    this.tagService.update(this.tagId, tagForm).subscribe(() => {
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
