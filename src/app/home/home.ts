import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
 
@Component({
  imports: [RouterOutlet],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})

export class Home {
  @Input() parentValue: boolean = false;
  @Output() childEvent = new EventEmitter<string>;
  
  btnClicked(){
    this.childEvent.emit("Child Message")
  }
  message: string = '';
  location: string = '';
  
  // constructor(
  //   private activatedRoute: ActivatedRoute
  // ){
  //   this.activatedRoute.params.subscribe(
  //     (params)=>{
  //       this.message =params['message'];
  //       console.log(this.message);
  //     }
  //   );
  // }

  constructor(private router: Router) {
    effect(() => {
      console.log(
        this.router.lastSuccessfulNavigation()?.extras.state?.['data']
      );
    });
  }
}