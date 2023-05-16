import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm=new FormGroup({
    loginId:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    contactNumber:new FormControl(''),
    roles:new FormControl(''),
    secretQuestion:new FormControl(''),
    answer:new FormControl('')
  });

  getRegistrationFormData(){
    console.log(this.registrationForm.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
