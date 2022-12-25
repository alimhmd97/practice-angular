import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  @Input() selectedRecipe : Recipe
  public showDropDown:boolean=false;
  public toggleDropDown():void{
    this.showDropDown=!this.showDropDown;
  }
}
