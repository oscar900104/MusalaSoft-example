import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { GatewayService,Device } from 'src/app/services/gateway.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregate-device',
  templateUrl: './agregate-device.component.html',
  styleUrls: ['./agregate-device.component.css']
})
export class AgregateDeviceComponent implements OnInit {
  list:any;
  count:any;
  var:any;
  x:any;
  device : Device = {
    id_gateway : '',
    uid: '',
    Provider: '',
    CreationDate: '',
    active: false
  }

  constructor(private gat: GatewayService, private route: Router, private activated:ActivatedRoute) { 
    
    
  }

  ngOnInit(): void {
    this.var = this.activated.snapshot.paramMap.get('id');
    console.log(this.var)
    this.listGateways()
  }

  addDevice(){
    this.gat.all().subscribe(
      res=>{
        this.list = <any>res
        
        this.list.forEach((d: { id_gateway: any; }) => {
          if(this.var == d.id_gateway){
            this.count ++;
          }
          
        });

        if(this.list.length < 10){
          console.log(this.count)
          this.gat.addDevice(this.device).subscribe();
          this.route.navigate(['/main']);
        }
        else{
          window.alert("no enought more devices");
          this.route.navigate(['/main']);
        }
      }
    )
    
    
    
  }

  listGateways(){
    this.gat.getallGateways().subscribe(
      res=>{
        console.log(res);
        const p: { id: any; }[] = [];
        this.list = <any>res;
        this.list.forEach((e: { id: any; }) => {
          if(e.id == this.var){
             p.push(e);
             this.x = p;
             console.log(this.x)
          }
        });
      },
      err=> console.log(err)
    )
  }


}
