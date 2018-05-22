import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../models/details';
import { ApiserviceService } from '../../Services/apiservice.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { UpdateDetails } from '../../models/update-details';

@Component({
  selector: 'app-helpdesk-display',
  templateUrl: './helpdesk-display.component.html',
  styleUrls: ['./helpdesk-display.component.css']
})
export class HelpdeskDisplayComponent implements OnInit {
  show:boolean=true;
  details: UserDetails[];
  //updatedDetails:FormGroup;

  constructor(private api:ApiserviceService) {
    this.details = [new UserDetails("Aayush","Singh",21,"India","admin","qwerty123")];
    // this.updatedDetails = new FormGroup({
    //   fname: new FormControl('', [Validators.required]),
    //   lname: new FormControl('', [Validators.required]),
    //   age: new FormControl('', [Validators.required,Validators.min(1)]),
    //   country: new FormControl('', [Validators.required]),
    //   uname: new FormControl('', [Validators.required]),
    // });
   }
  
   toggle(){
    this.show = !this.show;
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

  data:UpdateDetails;
  
  update(fname,lname,age,country,uname){
    this.data = new UpdateDetails(fname,lname,age,country,uname);
    console.log(this.data);
  }
}
