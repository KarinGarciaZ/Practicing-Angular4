import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RetoDataService } from './retoData.service';

@Injectable()
export class RetoPostService extends RetoDataService {
  constructor(http: Http) {
    super('https://api.github.com/users/KarinGarciaZ/followers',http);
   }

}
