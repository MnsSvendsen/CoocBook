import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Jule Ribbe',
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
         'https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_574,q_80,w_945/mzlmdlc0d4q0whfu4tyw.jpg',
         [
             new Ingredient("PorkSide", 1),
             new Ingredient("Chillies", 3),
             new Ingredient("Potatos", 4),
            ]),
        new Recipe('Jule Ribbe2',
         'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
         'https://i2.wp.com/hverdagslivet.no/wp-content/uploads/2017/12/ribbe-2.jpg?resize=1024%2C628&ssl=1',
         [
            new Ingredient("PorkSide", 1),
            new Ingredient("Salt", 1),
            new Ingredient("Pepper", 1),
           ])
      
    ];

    constructor(private slService: ShoppingListService){

    }
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}