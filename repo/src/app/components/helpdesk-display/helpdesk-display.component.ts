import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../models/details';

@Component({
  selector: 'app-helpdesk-display',
  templateUrl: './helpdesk-display.component.html',
  styleUrls: ['./helpdesk-display.component.css']
})
export class HelpdeskDisplayComponent implements OnInit {

  details: UserDetails[];
  constructor() {
    this.details = [new UserDetails("Aayush","Singh",21,"India","admin")];
   }
  
  ngOnInit() {
  }

}
