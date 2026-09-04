import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class TestService {

    private httpClient = inject(HttpClient);

    getData() {
        let productId = 5;


        let headers = new HttpHeaders({
            Authorization: 'Bearer XYZTOken',
            ContentType:'application/json2'
        });

        let bodyVariable = { id: 5 };
                let urlPath = 'https://dummyjson.com/products/'+productId;

        this.httpClient.get(urlPath).subscribe(
            (response) => {
                console.log(response);
            }
        );
    }
}