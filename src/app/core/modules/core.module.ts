import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MainComponent } from '../components/main/main.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
