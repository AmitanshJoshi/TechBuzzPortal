import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { MaterialsComponent } from './materials/materials.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ExploreComponent } from './explore/explore.component';
import { TaketestComponent } from './taketest/taketest.component';
import { TestService } from './shared/test.service';
import {} from './shared/getjobs.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    MaterialsComponent,
    FooterComponent,
    ExploreComponent,
    TaketestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
