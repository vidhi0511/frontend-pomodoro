import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SyncComponent} from './sync/sync.component';
import{DefaultComponent} from './default/default.component';
import{PlaylistComponent} from './playlist/playlist.component';

const routes: Routes = [
  {path:'sync',component:SyncComponent},
  {path:'default',component:DefaultComponent},
  {path:'playlist',component:PlaylistComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
