import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private recipeService:RecipeService ) { }

  ngOnInit() {
  }
  saveRecipe(){
  console.log("saving..")
  this.recipeService.saveRecipeToServer();
  }
  fetchRecipe(){
  console.log("fetching..")
  this.recipeService.fetchRecipeFromServer();
  }

}
