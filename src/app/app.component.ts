import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task1';

  constructor(private http:HttpClient){

  }
  onContactCreate(contacts:{name: string,email: string,phone: string}){
    console.log(contacts);
    this.http.post('http://upskilling-egypt.com:3001/contact/contacts.json',contacts)
    .subscribe((res) =>{
      console.log(res);
    });
  }
}
