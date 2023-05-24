import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    if(this.forgetPasswordForm.value.password!==this.forgetPasswordForm.value.confirmPassword){
      alert("Please Type password & confirm password same")
      this.router.navigate(['/forget'])
    }else{
      alert('Password reset successful')
      console.log(this.forgetPasswordForm.value);
      this.router.navigate(['/login'])
    }
   
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
