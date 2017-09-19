import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import{Subject} from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.modal';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();


  constructor(private dataStorageService:DataStorageService) { }

        private recipes:Recipe[]=[
        new Recipe('Tasty Schnitzel',
        'a super tast Schnitzel- Just Awesome ',
        'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
        [
        new Ingredient('Meat',1),
        new Ingredient('FrenchFries',20),
        ]),
        new Recipe('a big fat burger','what else u need to say',
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/Banjo_Shark_recipe.jpg',
        [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1),
        ]
        )];

getRecipes(){
return this.recipes.slice();
}

getDetailRecipe(id:number){
return this.recipes[id];
}

addRecipes(recipe:Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
}
updateRecipe(recipe:Recipe,index:number){
this.recipes[index]=recipe;
this.recipesChanged.next(this.recipes.slice());

}
deleteRecipe(index:number){
this.recipes.splice(index, 1);
this.recipesChanged.next(this.recipes.slice());

}
saveRecipeToServer(){
this.dataStorageService.storeRecipe(this.recipes)
.subscribe(
(response)=>console.log(response),
(error)=>console.log(error)
);}

fetchRecipeFromServer(){
this.dataStorageService.fetchRecipe()
.subscribe(
(response)=>{this.recipes=response.json();
this.recipesChanged.next(this.recipes.slice()); },
(error)=>console.log(error)
);}


}
