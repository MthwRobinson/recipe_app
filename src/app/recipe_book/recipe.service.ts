import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping_list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Squawk! Bacon!', 
      'This is a test', 
      'https://github.com/MthwRobinson/recipe_app/blob/master/src/app/shared/jabber.jpg?raw=true',
      [
        new Ingredient('Fake Bacon', 3),
        new Ingredient('Hungry Parrot', 1)
      ]
    ),
    new Recipe(
      'Bamboo!', 
      'This is a test', 
      'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg',
      [
        new Ingredient('Bamboo!', 14),
        new Ingredient('Hungry panda', 2)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    // .slice() returns a copy of the array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
