import { Component, Input, OnInit } from '@angular/core';
import { CakeService } from '../main/cake.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment:any = "";
  stars:any = 0

  allCakes: any[] = [];

  //cakeById: string = "";
  cakeById:any;
  selectedCake= false;
  

  constructor(  private _cakeService: CakeService,
                private _router:Router,
                private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneCake('');
    this.fetchAllCakes()
  }

  fetchAllCakes(): void {
    console.log("We are going to fetch the cake list!");
    this._cakeService.fetchAllCakes()
    .subscribe( (data:any) => {
      this.allCakes = data;
      console.log( "From comment component, retrieve all cakes: ", this.allCakes );
    });
  }

  createNewComment(event:any, id:string) : void {
    console.log("ID : ", id)
    event.preventDefault();

    let newComment = {
      comment : this.comment,
      stars : this.stars
    }

    console.log("Crete new Comment(from component) : ", newComment)
    let observable = this._cakeService.CreateComment( id, newComment )
    observable.subscribe((data: any) => {
      this.allCakes.push( data );
          console.log(data);
        })
        this.fetchAllCakes()
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

  updateComment( event: any ):void{
    this.comment = event.target.value;
    console.log( this.comment );
  }

  updateStars( event: any ):void{
    this.stars = event.target.value;
    console.log( this.stars );

  }




}
