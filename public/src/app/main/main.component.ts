import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from './cake.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //cakeById: string = "";
  cakeById:any;
  selectedCake= false;
  
  

  constructor(  private _cakeService: CakeService,
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneCake('');
  }

  getOneCake( id:string ): void{
    let observable = this._cakeService.getOneCake( id );
    
    observable.subscribe( (data:any) =>{
      this.cakeById = data;
      console.log("One result By ID: ", this.cakeById);
    });
  }

  onShow(event:any){
    let id:string = event.target.id;
    this.getOneCake(id);
    this.selectedCake=true;
  }


}
