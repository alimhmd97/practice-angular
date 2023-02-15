import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-ngrx-recipe-details',
  templateUrl: './ngrx-recipe-details.component.html',
  styleUrls: ['./ngrx-recipe-details.component.css']
})
export class NgrxRecipeDetailsComponent {
  public selectedRecipe: any;
  //  -----------------------------------------------------------------------------------------------
  constructor(
    private store: Store<AppState>
  ) {
    this.selectedRecipe = this.store.select(state => state);
    this.selectedRecipe.subscribe(r => {
      this.selectedRecipe = r?.recipes?.selectedRecipe
        ;

    })
  }
  //  -----------------------------------------------------------------------------------------------
  public showDropDown: boolean = false;
  public toggleDropDown(): void {
    this.showDropDown = !this.showDropDown;
  }
}
