import { Component, OnInit } from '@angular/core';
import { faMobileScreen} from '@fortawesome/free-solid-svg-icons';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {
  mobil= faMobileScreen;
  facebook=faFacebook ;
  constructor() { }

  ngOnInit(): void {
  }

}
