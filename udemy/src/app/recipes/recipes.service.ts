import { Injectable } from '@angular/core';
import { IRecipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: IRecipe[] = [
    {
      id: '1',
      title: 'pizza',
      imageUrl:
        'https://www.mindmegette.hu/images/215/L/lead_L_crop_201802281601_szalamis-pizza.jpg',
      ingredients: ['tomato', 'cheese', 'ham', 'dough'],
    },
    {
      id: '2',
      title: 'hamburger',
      imageUrl:
        'https://www.mindmegette.hu/images/143/O/crop_201603091554_hamburger.jpg',
      ingredients: ['tomato', 'cheese', 'ketchup', 'cucumber'],
    },
    {
      id: '3',
      title: 'pulled-pork',
      imageUrl:
        'https://img-global.cpcdn.com/recipes/eb0fa059e5a44f8d/400x400cq70/photo.jpg',
      ingredients: ['pork', 'salad', 'bbq'],
    },
  ];
  constructor() {}

  getAllRecipes(): IRecipe[] {
    console.log(this.recipes);
    return [...this.recipes];
  }

  getRecipe(recipeId: string): IRecipe {
    return {
      ...this.recipes.find((x) => x.id === recipeId),
    };
  }

  removeRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((x) => x.id !== recipeId);
  }
}
