import { EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test1', 'simple test', `https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,
    c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg`),
    new Recipe('test2', 'another test recipe', `https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,
    c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg`)
  ];

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
