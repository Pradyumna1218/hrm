import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  message: number = 0;
  location: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute
  ){
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.message = params['msg'];
        this.location = params['loc']
        console.log(this.message);
        console.log(this.location);
        
      }
    );
  }
}
