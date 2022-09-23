import { Component, OnInit } from '@angular/core';
import {GatewayService} from '../../services/gateway.service'
import { Gateway } from '../../services/gateway.service';
@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  list: Gateway[] = [];
  constructor( private gat: GatewayService) { }

  ngOnInit(): void {
    this.listGateways();
  }

  listGateways(){
    this.gat.getallGateways().subscribe(
      res=>{
        console.log(res);
        this.list = <any>res;
      },
      err=> console.log(err)
    )
  }

  delete(id:any){
    this.gat.deleteGateway(id).subscribe(
      res=>{
        console.log("gateway deleted");
        this.listGateways();
      },
      err=> console.log(err)
    );
  }

  onChange(option:any, enabled: boolean){
      if (option.active == 1)
        enabled = true
  }

  
}
