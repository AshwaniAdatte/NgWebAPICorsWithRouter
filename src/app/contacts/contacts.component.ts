import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private http: HttpClient, 
    private contactService:ContactService) { }
  contacts : Contact[];
  ngOnInit() {
  
    this.contactService.getContacts()
    .subscribe(contacts => this.contacts = contacts)
  }


}
