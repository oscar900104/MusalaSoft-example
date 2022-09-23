import { Component, OnInit } from '@angular/core';
import {Gateway, GatewayService} from '../../services/gateway.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregate',
  templateUrl: './agregate.component.html',
  styleUrls: ['./agregate.component.css']
})
export class AgregateComponent implements OnInit {

  gateway : Gateway = {
    id : '',
    SerialNumber: '',
    LegibleName: '',
    ipv4: '',
    active: false
  }

  constructor(private gat: GatewayService, private route: Router) { }

  ngOnInit(): void {
  }

  add(){
    this.gat.addGateway(this.gateway).subscribe();
    this.route.navigate(['/main']);
  }

}
