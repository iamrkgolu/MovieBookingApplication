import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouterGuardService } from 'src/app/services/router-guard.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    loginId:new FormControl(''),
    password:new FormControl(''),
    roles:new FormControl<string|any>('')
  })
  msg:any;
  constructor(private userService:UserService,private router:Router,private routerGuard:RouterGuardService) { }

  public getLoginData(){
        localStorage.setItem('roles',this.loginForm.value.roles)
    // this.userService.loginUser(this.loginForm.value).subscribe(data=>{

    //   console.log(data.Token)
    //   localStorage.setItem('token',data.Token)
    //   localStorage.setItem('roles',this.loginForm.value.roles);
    //   this.router.navigate(['/home'])

    // })
    // console.log(this.loginForm.value)
    this.router.navigate(['/home'])


  }




  ngOnInit(): void {
  }

}
