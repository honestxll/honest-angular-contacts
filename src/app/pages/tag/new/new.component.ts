import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { Toast } from 'src/app/utils/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  constructor(private tagService: TagService, private router: Router) {}

  ngOnInit() {}

  onSubmit(tagForm) {
    this.tagService.store(tagForm).subscribe(() => {
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
