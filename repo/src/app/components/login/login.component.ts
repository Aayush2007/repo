import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  
  constructor() {
    this.login = new FormGroup({
			userName: new FormControl('', [Validators.required]),
			Password: new FormControl('', [Validators.required])
		});
  }

  onlogin(){
    
  }
  
  ngOnInit() {
  }

}
