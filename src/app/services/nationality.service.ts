import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  constructor(private http:HttpClient) { }

  public getNationality(name:string):Observable<any>{
    return this.http.get('https://api.nationalize.io/?name='+name);
  }
}
