import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../models/details';
import { ApiserviceService } from '../../Services/apiservice.service';

@Component({
  selector: 'app-helpdesk-display',
  templateUrl: './helpdesk-display.component.html',
  styleUrls: ['./helpdesk-display.component.css']
})
export class HelpdeskDisplayComponent implements OnInit {

  details: UserDetails[];
  constructor(private api:ApiserviceService) {
    this.details = [new UserDetails("Aayush","Singh",21,"India","admin","qwerty123")];
   }
  
  ngOnInit() {
  }

  // for deleting a user.
  delete(user:string){
    this.api.deleteUser(user).subscribe(
      response => this.details = response,
      error=>console.error(error),
      ()=>{console.log(this.details)})
  }

  
}
