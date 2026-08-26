import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  imports: [FormsModule, Home],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hrm')
  @ViewChild('TestCheckboxTemp') tempCheckbox: ElementRef<HTMLInputElement> | undefined;  

  header: string = "App Component";

  a: number = 5.1;
  b: number = 7;

  secondTitle: string = "The user is active";
  secondTitl2 = signal("The user is active");

  isChecked: boolean = true;
  isChecked2 = signal<boolean>(true);

  dothis: string = this.isChecked ? "True" : "false"; // ischecked

  changeCheckbox(){
    // this.isChecked2.set(false);

    // this.isChecked = !this.isChecked;
    // this.isChecked = value;
    // this.dothis = this.isChecked ? "True" : "false"
    // return "";
    // this.isChecked = <boolean>this.tempCheckbox?.nativeElement.checked 
    console.log('horra');
  }

  handleChildEvent(value: string){
    this.header = value;
  }
}


// One way Binding

// Two way Binding
