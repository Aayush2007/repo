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
      fName: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required,Validators.min(1)]),
      countryId: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(3)]),
      role: new FormControl('', [Validators.required])
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
    console.log(value);
    this.router.navigateByUrl('/login');
  }
}