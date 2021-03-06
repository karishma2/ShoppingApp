import { Component, OnInit,ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import{ShoppingListService} from '../../shopping-list/shopping-list.service';
import { Router } from '@angular/router';
import{ActivatedRoute} from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @ViewChild("ingredientsFromRecipe") ingredientsFromRecipe;
     recipe:Recipe;
 
  constructor(private shoppingListService:ShoppingListService,
  private route:ActivatedRoute,
  private recipeService:RecipeService,
   private router: Router) { }

  ngOnInit() {
  
  this.route.params
  .subscribe(
     (params)=>{
     this.recipe= this.recipeService.getDetailRecipe(params['id']);
    // console.log(this.route.snapshot.params['id']);
     }       
    );
  }
  
  addIngredientFromRecipe(){
  this.shoppingListService.addIngredients(this.recipe.ingredients);
  } 
  
  onDeleteRecipe(){
  //console.log("deleted");
  this.recipeService.deleteRecipe(this.route.snapshot.params['id']);
  //this.router.navigate(['/recipes']);
  this.router.navigate(['/recipes']);
  }
  
  

}
