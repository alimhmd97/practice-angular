import { Recipe } from "./recipes/recipe.model";

interface NgrxType{
  type: string;
  payload:unknown;
} 

export interface AppState {
  readonly selectedRecipe: NgrxType;
}