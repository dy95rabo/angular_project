import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule } from '@nebular/theme';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TictactoeModule } from './tictactoe/tictactoe.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic'}),
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    RouterOutlet,
    SharedModule,
    // RouterModule,
    TictactoeModule,
    NavigationComponent,
    
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
