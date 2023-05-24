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

  

  rolesList: string[] = ['','Admin', 'Customer'];

  loginForm=new FormGroup({
    loginId:new FormControl(''),
    password:new FormControl(''),
    roles : new FormControl<string|any>('')
  })
  constructor(private userService:UserService,private router:Router,private routerGuard:RouterGuardService) { }

  public getLoginData(){
        localStorage.setItem('roles',this.loginForm.value.roles)
        if(this.loginForm.value.roles===''){
          alert("Please select role")
          this.router.navigate(['/login'])

        }else{
          this.userService.loginUser(this.loginForm.value).subscribe(res=>{
            localStorage.setItem('token',res.Token)
            console.log(res.Token)
            this.router.navigate(['/home'])
           
          })
          
        }

         


  }




  ngOnInit(): void {
  }

}
