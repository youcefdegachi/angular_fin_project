import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {




  // constructor(private userService: UserService){}
  
  // users: any;

  
  ngOnInit(): void {
  //   this.userService.getUsers().subscribe(data => {
  //     this.users = data;
  //   });
  }

}
