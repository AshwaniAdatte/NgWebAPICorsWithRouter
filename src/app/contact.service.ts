import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  getContacts(): Observable<Contact[]>
  {
    return this.http.get<Contact[]>("http://localhost:54778/api/Contacts");
  }
  getContact(id: number): Observable<Contact>
  {
    return this.http.get<Contact>("http://localhost:54778/api/Contacts/" +id);
  }
}
