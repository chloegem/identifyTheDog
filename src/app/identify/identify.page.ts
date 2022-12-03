import { Component, OnInit } from '@angular/core';
import { GenderService } from '../services/gender.service';
import { AgeService } from '../services/age.service';
import { NationalityService } from '../services/nationality.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.page.html',
  styleUrls: ['./identify.page.scss'],
})
export class IdentifyPage implements OnInit {

  public gender='';
  public nationality ='';
  public age =0;
  public name ='';
  public temp: any[] | undefined;

  constructor(private genderService:GenderService, private ageService:AgeService, 
              private nationalityService:NationalityService, private router:Router,
              private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(param=>{
      this.name = param.get('name')?? '';
    });

    this.genderService.getGender(this.name).subscribe((response) =>{
      this.gender = response.gender;
    });

    this.ageService.getAge(this.name).subscribe((response) =>{
      this.age = response.age;
    });

    this.nationalityService.getNationality(this.name).subscribe((response) =>{
      this.temp=response.country;
    });
  }

  goBack(){
    this.router.navigate(['/']);
  }

}
