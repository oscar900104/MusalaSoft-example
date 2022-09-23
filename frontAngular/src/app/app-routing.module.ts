import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregateDeviceComponent } from './components/agregate-device/agregate-device.component';
import { AgregateComponent } from './components/agregate/agregate.component';
import { DetailsComponent } from './components/details/details.component';
import { InitComponent } from './components/init/init.component';
import { ModifyComponent } from './components/modify/modify.component';

const routes: Routes = [

  {path:'', redirectTo:'/main',pathMatch:'full'},
  {path:'main',component:InitComponent},
  {path:'add', component:AgregateComponent},
  {path:'edit', component:ModifyComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'createDevice/:id', component: AgregateDeviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
