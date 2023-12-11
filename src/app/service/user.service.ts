// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
/* 
  private userUrl = 'assets/user.json'; // Assuming user.json is in the assets folder
  private writeUrl = 'http://your-server-endpoint.com/write'; // Replace with your actual server endpoint

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  writeUser(user: any): Observable<any> {
    // Assuming you have a server endpoint to handle writing to user.json
    // This is just a mock example, replace with your actual server endpoint
    return this.http.post(this.writeUrl, user);
  } */


  user = {
    name: '',
    power:0,
    image:''
  }

  users:any[]=[];

}

