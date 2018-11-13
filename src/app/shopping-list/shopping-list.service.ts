import { Ingredient } from "../shared/ingredient.model"
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChange = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Side Pork', 1),
        new Ingredient('Potato', 4),
        new Ingredient('Sour Cabage', 2),
      ];


      getIngridients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());

      }
}