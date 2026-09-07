import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-denied',
  styleUrl: './denied.scss',
  templateUrl: './denied.html',
})

// Local storage do in service mostly. We did this here becuse denied was already created
export class Denied {
  getLocalStorage(){
    console.log(localStorage.getItem('userDetail'));
  }
  setLocalStorage(){
    localStorage.setItem('userDetail', JSON.stringify({
            id: '1123',
            name: 'Pradyumna'
        }));
  }
  getSessionStorage(){
    console.log((sessionStorage.getItem('userId')))
    
  }
  setSessionStorage(){
    sessionStorage.setItem('userId', '1123')
    
  }
}
