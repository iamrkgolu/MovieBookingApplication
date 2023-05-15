import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm=new FormGroup({
    loginId:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    answer:new FormControl('')
  });

  getForgetPasswordFormData(){
    console.log(this.forgetPasswordForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
