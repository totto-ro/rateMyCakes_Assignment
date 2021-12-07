import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private _http: HttpClient) { }

  fetchAllCakes() {
    return this._http.get('http://localhost:7077/cake/');
  }
  getOneCake(id: string){
    return this._http.get(`http://localhost:7077/cake/${id}`);
  }
  
  CreateCake(newCake: any) {
      return this._http.post('http://localhost:7077/cake/', newCake)
  }

  CreateComment(_id: string, newComment: any, ) {
    console.log("From service in angular: ", newComment)
    return this._http.post(`http://localhost:7077/cake/${_id}`, newComment)
}

}
