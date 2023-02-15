import { Recipe } from "../recipes/recipe.model";
import { Action } from '@ngrx/store';

export const SELECT_RECIPE = 'SELECT_RECIPE';
export function selectRecipeReducer(state: {} , action:any) {
  switch (action.type) {
    case SELECT_RECIPE:
        return {...state,selectedRecipe:action.payload};
    default:
        return state;
    }
}