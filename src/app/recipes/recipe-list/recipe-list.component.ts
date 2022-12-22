import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes:Recipe[]=[
    new Recipe('test','https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.rsquare.w700.jpg','test'),
    new Recipe('test','https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.rsquare.w700.jpg','test'),
    new Recipe('test','https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg','test'),
  ];
  // ------------------------------------------------------------------------------------------------
  constructor (){}
  // ------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    
  }
}
