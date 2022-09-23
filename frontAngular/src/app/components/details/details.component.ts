import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs';
import { GatewayService } from 'src/app/services/gateway.service';
import { Gateway } from 'src/app/services/gateway.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  var: any;
  result: any;
  resultDevices:any;
  count: number = 0;
  list: any[] = [];
  listDetails: any[] = [];

  constructor(private gat: GatewayService, private activated:ActivatedRoute) {
    
   }


  ngOnInit(): void {
    this.allDevicesGateways();
    this.detailsContent();
    this.var = this.activated.snapshot.paramMap.get('id');
  }

  allDevicesGateways(){
    
    this.gat.getallGateways().subscribe(
      res=>{
        console.log(res);
        console.log(this.var);
        this.list = <any>res;
        this.list.forEach(x => {
          if(x.id == this.var){

            this.result = x;
            console.log(this.result)

          }
        });
        
      },
      err=> console.log(err)
    )
  }

  detailsContent(){
    
    this.gat.all().subscribe(
      res=>{
        console.log(res);
        console.log(this.var);
        this.listDetails = <any>res;
        const p: any[] = [];
        this.listDetails.forEach(d => {
          if(this.var == d.id_gateway && this.count < 10){
            p.push(d);
            this.resultDevices = p;
            console.log(this.resultDevices)
            this.count ++;
            console.log(this.count)
            
          }
          
        });
        
      },
      err=> console.log(err)
    )
  }

  deleteDev(id:any){
    this.gat.deleteDevice(id).subscribe(
      res=>{
        console.log("gateway deleted");
        this.detailsContent();
      },
      err=> console.log(err)
    );
  }

}
