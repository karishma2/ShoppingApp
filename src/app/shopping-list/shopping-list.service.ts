import { Injectable,EventEmitter } from '@angular/core';
import{Subject} from 'rxjs/Subject';
import{Ingredient} from '../shared/ingredient.modal';


@Injectable()
export class ShoppingListService {
ingredientsChanged = new Subject<Ingredient[]>();
startEditing = new Subject<number>();
  constructor() { }
  
private ingredients:Ingredient[]=[ new Ingredient("Apples",5),
new Ingredient("Tomatoes",10)];

getIngredients()
{
return this.ingredients.slice();
}
addIngredient(ingredient:Ingredient){
this.ingredients.push(ingredient);
this.ingredientsChanged.next(this.ingredients.slice());
}
addIngredients(ingredients:Ingredient[]){
this.ingredients.push(...ingredients);
this.ingredientsChanged.next(this.ingredients.slice());
}
getIngredient(index){
return this.ingredients[index];
}

editedIngredient(ingredient,index){
console.log(ingredient);
this.ingredients[index]=ingredient;
this.ingredientsChanged.next(this.ingredients.slice());
}
deleteIngredient(index:number){
this.ingredients.splice(index, 1);
this.ingredientsChanged.next(this.ingredients.slice());
}


}
