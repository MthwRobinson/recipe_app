import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  nameInput: string;
  amountInput: number;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(nameInput, amountInput){
    const newIngredient = new Ingredient(
      nameInput.value, 
      amountInput.value
    );
    this.ingredientAdded.emit(newIngredient);
  }

}
