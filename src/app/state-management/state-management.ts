import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-state-management',
  styleUrl: './state-management.scss',
  templateUrl: './state-management.html',
})
export class StateManagement {
  name: string = 'Ram';
  displayName: string = '';

  changeDisplayName(){
    this.displayName = "Hello, " + this.name;
  }
  //Signal way binding 
  nameSignal = signal('Ram');
  displayNameSignal= computed( ()=> "hello, " + this.nameSignal());

  // constructor(){
    effectSignals = effect(()=>{
      console.log("Hello from console " + this.nameSignal())
    })
  // }
}
