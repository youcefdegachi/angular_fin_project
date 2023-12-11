import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  
  
  
  constructor(private fb: FormBuilder,public userlist:UserService,private router: Router){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }


  // username:string | undefined;
  // password:string | undefined;
  check() {
    const username = this.loginForm.get('username');
    const password = this.loginForm.get('password');

    if (username?.value === 'aaa@gmail.com' && password?.value === '0000') {
      // Navigate to the home component or perform any action you want
      alert('Login successful');
      this.router.navigate(['/todo']);
    } else {
      alert('Incorrect username or password');
      // You can display an error message to the user if you want
    }
  }
  mail:string | undefined;
  // check(){
  //   if(this.mail==="aaa@gmail.com"){
  //     this.router.navigate(['/todo']);
  //   }else{
  //     // this.router.navigate(['/forgeten']);
  //     alert("wrong")
  //   }
  // }


}
