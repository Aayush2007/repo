import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiserviceService } from '../../Services/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register : FormGroup;
  country: any;

  constructor(
    private api : ApiserviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm();
    this.getCountry();
  }

  registerForm = () => {
    this.register = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      countryId: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
    });
  }
 
  getCountry = () => {
    this.api.getCountry().subscribe(res => this.country = res);
  }

  registerSubmit = () => {
    console.log(this.register.value);
    this.router.navigateByUrl('');
  }
}
