import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Bamboo!', 'This is a test', 'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg'),
    new Recipe('More Baboo!', 'This is a test', 'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg')
  ];

  getRecipes() {
    // .slice() returns a copy of the array
    return this.recipes.slice();
  }

}
