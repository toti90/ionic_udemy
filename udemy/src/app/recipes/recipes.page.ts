import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {
  recipes: IRecipe[];

  constructor(private recipeService: RecipesService, private router: Router) {}

  ionViewWillEnter() {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
