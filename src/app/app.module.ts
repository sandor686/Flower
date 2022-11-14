import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorksComponent } from './works/works.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContantComponent } from './contant/contant.component';
import { AppRoutingModule } from './app-routing.module';
import { GiftComponent } from './gallery/gift/gift.component';
import { FavorComponent } from './gallery/favor/favor.component';
import { AnademComponent } from './gallery/anadem/anadem.component';
import { SirkoszoruComponent } from './gallery/sirkoszoru/sirkoszoru.component';

import { SirdiszComponent } from './gallery/sirdisz/sirdisz.component';
import { FormsModule } from '@angular/forms';
import { DemoDirective } from './gallery/gift/demo.directive';
import { KoszoruComponent } from './gallery/koszoru/koszoru.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    WelcomeComponent,
    WorksComponent,
    GalleryComponent,
    ContantComponent,
    GiftComponent,
    FavorComponent,
    AnademComponent,
    SirkoszoruComponent,
    KoszoruComponent,
    SirdiszComponent,
    DemoDirective,
    KoszoruComponent,
    

       
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
