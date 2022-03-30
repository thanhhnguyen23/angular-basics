import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
