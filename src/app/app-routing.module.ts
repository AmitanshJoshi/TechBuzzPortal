import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialsComponent} from './materials/materials.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import { ExploreComponent } from './explore/explore.component';
import { TaketestComponent } from './taketest/taketest.component'
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path : 'navigation-bar' , component : NavigationBarComponent},
  { path : 'Materials' , component : MaterialsComponent},
  { path : 'Home' , component : HomeComponent },
  { path : 'Explore' , component : ExploreComponent },
  { path : 'TakeTest' , component : TaketestComponent },
  { path :'result' , component : ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
