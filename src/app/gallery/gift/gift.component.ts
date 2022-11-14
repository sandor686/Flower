import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css'],
  
})
export class GiftComponent implements OnInit {
kep:any;
  constructor() { }
   
  left(){
    this.kep=document.querySelector(".active");
    
   

  }
  right(){


  }     
 
  ngOnInit(): void {
  }

}
