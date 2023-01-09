import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
private recipes:Recipe[]=[
  new Recipe('Another  Recipe','https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg','this is simply a test3'),
  new Recipe('Another Another Recipe','https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg','this is simply a test4'),

]
public slectedRecipe=new EventEmitter <Recipe>()
// ------------------------------------------------------------------------------------------------
  constructor() { }
// ------------------------------------------------------------------------------------------------

public getRecipes(){
  return [...this.recipes];
}

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
}
