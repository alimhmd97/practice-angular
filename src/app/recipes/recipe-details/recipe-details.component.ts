import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  public showDropDown:boolean=false;
  public toggleDropDown():void{
    this.showDropDown=!this.showDropDown;
  }
}
