import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  nameInput: string;
  amountInput: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(nameInput, amountInput){
    const newIngredient = new Ingredient(
      nameInput.value, 
      amountInput.value
    );
    this.shoppingListService.addIngredient(newIngredient);
  }

}
