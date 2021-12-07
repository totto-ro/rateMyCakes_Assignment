import { Component, OnInit } from '@angular/core';
import { CakeService } from '../main/cake.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  newCake: any;
  errorMessage: string = "";

  constructor(  private _cakeService: CakeService,
                private _router:Router,
                private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.newCake = {
      bakerName : "",
      image : ""
    }
  }

  createNewCake( event: any ): void {
    console.log(this.newCake)
    event.preventDefault();
    let observable = this._cakeService.CreateCake(this.newCake);
    observable.subscribe((data: any) => {
      console.log("Form create cake: ", data);
    })
    
  }

}
