import { Component } from '@angular/core';
import { DogService,Dog } from '../services/dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name='';
  message='';

  constructor(private dog:DogService, private router:Router) {}

  ngOnInit(){
    this.dog.getDog().subscribe((response: Dog)=>{
      this.message=response.message;
    });
  }

  public generate(){
    const name = this.name.replace(/\s/g,'');
    this.router.navigate([`/identify/${name}`]);
  }
}
