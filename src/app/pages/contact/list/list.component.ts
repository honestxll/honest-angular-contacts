import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  contacts: Contact[];
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.index().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }
}
