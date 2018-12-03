import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id)
    .subscribe(contact => this.contact = contact)
  }

}
