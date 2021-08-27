import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{MusicComponent} from './music/music.component';
import{HelpComponent} from './help/help.component';
import{SyncComponent} from './music/sync/sync.component';
import{DefaultComponent} from './music/default/default.component';
import{PlaylistComponent} from './music/playlist/playlist.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'music',component:MusicComponent},
  {path:'help',component:HelpComponent},
  {path:'music/sync',component:SyncComponent},
  {path:'music/default',component:DefaultComponent},
  {path:'music/playlist',component:PlaylistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
