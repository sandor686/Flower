import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AnademComponent } from './gallery/anadem/anadem.component';
import { FavorComponent } from './gallery/favor/favor.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GiftComponent } from './gallery/gift/gift.component';
import { KoszoruComponent } from './gallery/koszoru/koszoru.component';
import { SirdiszComponent } from './gallery/sirdisz/sirdisz.component';
import { SirkoszoruComponent } from './gallery/sirkoszoru/sirkoszoru.component';
import { WorksComponent } from './works/works.component';
import { ContantComponent } from './contant/contant.component';


const routes:Routes =[
{path:"main-page",component:MainPageComponent},
{path:"gallery",component:GalleryComponent},
{path:"works",component:WorksComponent},
{path:"ajandek",component:GiftComponent},
{path:"asztaldisz",component:AnademComponent},
{path:"sirkoszoru",component:SirkoszoruComponent},
{path:"koszoru",component:KoszoruComponent},
{path:"sirdisz",component:SirdiszComponent},
{path:"csokor",component:FavorComponent},
{path:"contant",component:ContantComponent},
{path: "", redirectTo: "/main-page", pathMatch: "full"},
{path:"**",component:MainPageComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
