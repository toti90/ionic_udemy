import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IRecipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipe: IRecipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(
      this.activatedRoute.snapshot.paramMap.get('recipeId')
    );
  }

  removeRecipeHandler() {
    this.recipeService.removeRecipe(this.recipe.id);
    this.router.navigate(['/recipes']);
  }

  async removeRecipe() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Delete',
      message: 'Do you really want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.removeRecipeHandler();
          },
        },
      ],
    });

    await alert.present();
  }
}
