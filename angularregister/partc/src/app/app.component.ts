import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';

  displayname='';
  displayemail='';
  displaycontact='';
  displayaddress='';

  getValue(name:string,email:string,contact:string,address:string){

  this.displayname=name;
  this.displayemail=email;
  this.displaycontact=contact;
  this.displayaddress=address;
  }
  


}
