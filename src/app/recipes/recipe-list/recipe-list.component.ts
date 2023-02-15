import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [];
  public selectedRecipe :  Observable<any>
  @Output() selectedRecipeEvent =new EventEmitter<Recipe>;
  // ------------------------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------------------
  constructor(
    private recipeService: RecipeService,
    private store: Store<any>
    ) { 
    this.selectedRecipe=  this.store.select(state => state.recipe);
  }
  // ------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  public selectRecipe(selectedRecipe: Recipe): void {
    this.selectedRecipeEvent.emit(selectedRecipe); 
    this.store.dispatch({
      type: 'SELECT_RECIPE',
      payload: <Recipe> selectedRecipe
    });
  
  }
}
