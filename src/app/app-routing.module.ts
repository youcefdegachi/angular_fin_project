import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { ProblemPageComponent } from './problem-page/problem-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  { path: 'forgeten', component: ForgetPasswordComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'pomodoro', component: PomodoroComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: ProblemPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
