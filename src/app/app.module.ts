import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { ProblemPageComponent } from './problem-page/problem-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';





// import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';



// import {MatToolbarModule} from '@angular/material/toolbar';


import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
// import {MatCardModule} from '@angular/material/card';
// !! form
// import {MatFormFieldModule} from '@angular/material/form-field'
// import { MatFormField } from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

// !! button

import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';



import {MatCardModule} from '@angular/material/card';

// !! chips
import {MatChipsModule} from '@angular/material/chips';

import {Component, ElementRef, ViewChild, inject} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {LiveAnnouncer} from '@angular/cdk/a11y';


// !! tabs
import {MatTabsModule} from '@angular/material/tabs';

// !! spinner

import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';


    // !! navbar

    import {MatToolbarModule} from '@angular/material/toolbar';

// !! 

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,

    HomePageComponent,
    PomodoroComponent,
    ProblemPageComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    TodoListComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    // MatButtonModule,
    BrowserAnimationsModule,
    // !!form
    // MatFormField,
    // !! buton
    MatButtonModule, MatTooltipModule, MatIconModule,
    // !! card
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    // !! input
    MatFormFieldModule, MatInputModule,
    // !! chips
    MatChipsModule,
    MatAutocompleteModule,
    AsyncPipe,
    // !! tabs 
    MatTabsModule,
    // !! spinner
    MatRadioModule, MatSliderModule, MatProgressSpinnerModule,

    // !! todo

    MatChipsModule,

    // !! navbar
    MatToolbarModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}

