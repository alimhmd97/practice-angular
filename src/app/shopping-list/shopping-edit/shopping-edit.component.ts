import { Component,ViewChild ,ElementRef,EventEmitter,Output} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountnputRef:ElementRef;
// ------------------------------------------------------------------------------------------------
@Output() ingredientAdded=new EventEmitter <{name:String,amount:Number}>();
// ------------------------------------------------------------------------------------------------
public onAddItem(){
  const ingName=this.nameInputRef.nativeElement.value
  const ingAmount=this.amountnputRef.nativeElement.value
  const newIngredient=new Ingredient(ingName,ingAmount);
 this.ingredientAdded.emit(newIngredient)
}
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
}
