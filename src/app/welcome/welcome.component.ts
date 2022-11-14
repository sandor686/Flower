
import { Component, ElementRef, OnInit, } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
 
 

 
  constructor(private el: ElementRef) {
    
    
  
  }
  
  ngOnInit(): void {
    function slide():void{
      let kepTomb:String[]=["assets/slides/1.jpg","assets/slides/2.jpg","assets/slides/3.jpg","assets/slides/4.jpg","assets/slides/5.jpg"]
  
      let viszater;
      let kep:any=document.getElementById("kep");
      let erteksrc=kep.getAttribute("src");
      console.log(erteksrc)
     let ertek=Number(erteksrc.charAt(14))
     
      for(let i=0;i<kepTomb.length;i++){
      
         if(ertek==5){
          viszater= kepTomb[0];
          kep.setAttribute("src",viszater);
          
        }
        else if(kepTomb[i]==erteksrc){
          viszater= kepTomb[i+1];
          console.log(i)
           kep.setAttribute("src",viszater);
           
         }
       
        }
        setTimeout(slide,5000)
    }
    setTimeout(slide,5000)
   
    
    }
    
 

  }
  






