import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping_list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping_list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListService } from './shopping_list/shopping-list.service';
import { RecipeBookComponent } from './recipe_book/recipe-book.component';
import { RecipeListComponent } from './recipe_book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe_book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe_book/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe_book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe_book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
