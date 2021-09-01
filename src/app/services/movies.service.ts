import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpclient: HttpClient
  ) { }

  requestApiGet(controller:string,boolParam:boolean,param:string){
    return this.httpclient.get(environment.rutaApi + controller + "/" + (boolParam == true? param : ""))
  }

  requestApiPost(controller:string,objSend:any){
    return this.httpclient.post(environment.rutaApi + controller ,objSend)
  }
}
