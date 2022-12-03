import { Component, OnInit } from '@angular/core';
import { GenderService } from '../services/gender.service';
import { AgeService } from '../services/age.service';
import { NationalityService } from '../services/nationality.service';
import { UntypedFormBuilder } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

}
