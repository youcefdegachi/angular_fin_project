import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  mymail?: string;
  afficher = false;
  check(){
      // alert("Please contact to admin for reset password");
      if( this.mymail == "aaa" ||  this.mymail == "aaa@gmail.com"  ){
        alert("your basword is aaa");
        this.afficher = true;
        // document.getElementById('myForm').addEventListener('routlet', function(event) {
        // event.preventDefault();}
      }else{
        alert("there not aaa@gmail.com");
        
      }
      // console.log(this.mymail)
  }
}
