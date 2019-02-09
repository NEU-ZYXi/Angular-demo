import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list-service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'test1',
      'test desc1',
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      [
        new Ingredient('test ingredient 1', 2),
        new Ingredient('test 2', 3)
      ]),
    new Recipe(
      'test2',
      'test desc2',
      'https://www.wonderplugin.com/videos/demo-image0.jpg',
      [
        new Ingredient('test3', 5),
        new Ingredient('test 2', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();  // return a copy of the field in the service
  }

  getRecipeById(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
