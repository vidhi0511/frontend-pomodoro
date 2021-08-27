import { NgModule } from '@angular/core';
import{RouterModule} from'@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { MusicComponent } from './music/music.component';
import{SyncComponent} from './music/sync/sync.component';
import { DefaultComponent } from './music/default/default.component';
import { PlaylistComponent } from './music/playlist/playlist.component'
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HelpComponent,
    MusicComponent,
    SyncComponent,
    DefaultComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
