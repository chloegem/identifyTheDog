import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor(private http:HttpClient) { }

  public getAge(name:string):Observable<any>{
    return this.http.get('https://api.agify.io/?name='+name);
  }
}
