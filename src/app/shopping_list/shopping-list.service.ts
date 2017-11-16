import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] =  [
    new Ingredient('Sugar', 5),
    new Ingredient('Tomatoes', 15)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
  //   for( let ingredient of ingredients ) {
  //     this.addIngredient(ingredient);
    //   }

    // ... is the es6 spread operator for push a list
    // of items to an existing array
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
