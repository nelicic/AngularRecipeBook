import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', `https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,
        c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg`,
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fires', 20)
        ]),
        new Recipe('Big Fat Burger', 'What else you need to say?', `https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,
        c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg`, 
        [
            new Ingredient('Bums', 2),
            new Ingredient('Meat', 1)
        ])
      ];

    constructor(private slService: ShoppingListService) { }
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}