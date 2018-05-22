import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiserviceService } from '../../Services/apiservice.service';
import { Router } from '@angular/router';
import { UserDetails } from '../../models/details';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register : FormGroup;
  country: any;
  rol = ["User","Helpdesk"];
  
  constructor(private api : ApiserviceService,private router: Router){
    this.registerForm();
    this.getCountry();
   }

  ngOnInit() {
  }

  registerForm = () => {
    this.register = new FormGroup({
      FName: new FormControl('', [Validators.required]),
      LName: new FormControl('', [Validators.required]),
      Age: new FormControl('', [Validators.required,Validators.min(1)]),
      Country: new FormControl('', [Validators.required]),
      UserName: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required,Validators.minLength(3)]),
      Role: new FormControl('', [Validators.required])
    });
  }
 
  getCountry(){
    console.log("aaya");
    this.api.getCountry().subscribe(
      response => this.country = response,
      error=>console.error(error),
      ()=>{
        console.log(this.country);
      });
  }

  registerSubmit({value}: { value:UserDetails}){
    this.api.addUser(value).subscribe(response => console.log(response),error=>console.error(error),()=>{});
    this.router.navigateByUrl('/login');
  }
}