import { Component,Input} from '@angular/core';
 interface Recipe{
  name: string;
  imagePath:string;
  description: string;
}
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input() recipe:Recipe;
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------


}
