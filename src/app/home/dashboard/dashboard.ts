import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  productId: number = 5;
  abc: string[] = ['']
  getAllProducts(){
    this.apiService.getAllProducts().subscribe(
      (response) => {
        console.log(response)
      }
    );
  }
  getProductsId(productId: number){
    this.apiService.getProductById(productId).subscribe(
      (response) => {
        console.log(response)
      }
    );
  }
}