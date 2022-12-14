import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interface } from 'readline';

export interface Dog{
  status:string;
  message:string;
}

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  getDog(): Observable<Dog>{
    return this.http.get<Dog>('https://dog.ceo/api/breeds/image/random');
  }
}
