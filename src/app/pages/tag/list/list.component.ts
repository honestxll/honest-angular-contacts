import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/tag.model';
import { Toast } from 'src/app/utils/toast';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  tags: Tag[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tagService: TagService,
  ) {}

  ngOnInit() {
    this.tagService.index().subscribe((tags: Tag[]) => {
      this.tags = tags;
    });
  }

  delete(tagId: number) {
    this.tagService.delete(tagId).subscribe(() => {
      this.tags = this.tags.filter(t => t.id !== tagId);
      Toast.fire({
        type: 'success',
        title: '删除成功',
      });
    });
  }
}
