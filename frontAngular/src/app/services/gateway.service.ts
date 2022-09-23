import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from '@angular/common/http';
import { host_url } from '../variables.globals';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {
   
  url='/api';
  
  constructor(private http:HttpClient) { }
  

  //Get all Gateways

  getallGateways (){
    return this.http.get(host_url + '/api/gateway');
  }

  //Get gateway
  getGateway(id:string){
    return this.http.get(host_url + '/api/'+id);
  }

  //Add gateway
  addGateway(gateway:Gateway){
    return this.http.post(host_url + '/api/create', gateway);
  }

  //Delete gateway
  deleteGateway(id:string){
    return this.http.delete(host_url + '/api/delete/'+id);
  }

  //all gateways and devices
  all(){
    return this.http.get(host_url + '/api');
  }

  //Delete device
  deleteDevice(id:string){
    return this.http.delete(host_url + '/api/deleteDevice/'+id);
  }

  //Add device
  addDevice(device:Device){
    return this.http.post(host_url + '/api/createDevice', device);
  }
  
}

export interface Gateway{
  id:any;
  SerialNumber: string;
  LegibleName: string;
  ipv4: any;
  active: boolean;
}

export interface Device{
  id_gateway:any;
  uid:string;
  Provider:string;
  CreationDate:any;
  active:boolean;
}