import { Component } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ngrxSelectedRecipe : any;
  //  -----------------------------------------------------------------------------------------------
  constructor(
    private store:Store<AppState>
  ){
  this.store.select(state=>state.selectedRecipe).subscribe(r=> { 
    this.ngrxSelectedRecipe=r?.payload;   
  })
  }
  title = 'Max_Books';
  public renderdComponent:string ='Recipes';
  public selectRendersComponent(renderdComponent:string):void{
this.renderdComponent = renderdComponent;
  }
}
