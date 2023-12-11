import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.scss']
})
export class ProblemPageComponent {
  constructor(private router: Router) {}

  /* tabChanged(tabIndex: number): void {
    if (tabIndex === 0) {
      this.router.navigate(['/todo']);
    } else if (tabIndex === 1) {
      this.router.navigate(['/pomodoro']);
    }}
    navigateToChipDetail(chipId: String): void {
      if(chipId=="todo"){
        this.router.navigate(['/todo']);
      }else{
        this.router.navigate(['/pomodoro']);
      }
  } */
  
  // tabChanged(event: any): void {
  //   if (event.index === 0) {
  //     this.router.navigate(['/todo']);
  //   } else if (event.index === 1) {
  //     this.router.navigate(['/pomodoro']);
  //   }
    // Add more conditions for additional tabs
  // }
}
