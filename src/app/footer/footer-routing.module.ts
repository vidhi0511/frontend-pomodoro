import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from '../home/home.component';
import{MusicComponent} from '../music/music.component';
import{HelpComponent} from '../help/help.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'music',component:MusicComponent},
  {path:'help',component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
