import { Component, OnInit } from '@angular/core';
import { GenderService } from '../services/gender.service';
import { AgeService } from '../services/age.service';
import { NationalityService } from '../services/nationality.service';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.page.html',
  styleUrls: ['./identify.page.scss'],
})
export class IdentifyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
