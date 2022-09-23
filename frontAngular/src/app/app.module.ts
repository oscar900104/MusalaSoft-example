import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './components/init/init.component';
import { AgregateComponent } from './components/agregate/agregate.component';
import { ModifyComponent } from './components/modify/modify.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { AgregateDeviceComponent } from './components/agregate-device/agregate-device.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    AgregateComponent,
    ModifyComponent,
    DetailsComponent,
    AgregateDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
