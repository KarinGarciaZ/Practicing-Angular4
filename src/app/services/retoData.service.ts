import { Http } from '@angular/http';
export class RetoDataService{
    constructor(private url: string, private http: Http){
    }

    getAll(){
        return this.http.get(this.url)
        .map(response => response.json());
    }
}