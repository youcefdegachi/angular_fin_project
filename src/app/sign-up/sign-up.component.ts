import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  constructor(public userlist: UserService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ajout(){
    //for add user
    this.userlist.users.push(this.userlist.user);
    //for emty hero chmp
    this.userlist.user = {
      name: '',
      power:0,
      image:''
    }
  }

}
