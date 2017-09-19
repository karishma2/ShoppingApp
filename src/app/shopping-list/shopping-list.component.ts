import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription} from 'Rxjs/Subscription';
import{Ingredient} from '../shared/ingredient.modal'
import{ShoppingListService} from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
ingredients:Ingredient[];

private subscription:Subscription;

  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  this.ingredients=this.shoppingListService.getIngredients();
  this.subscription=this.shoppingListService.ingredientsChanged.subscribe(
  (ingredients:Ingredient[]) => 
            {
            this.ingredients=ingredients;
            }
  );
  }

onIngredientAdded(ingredient){
this.shoppingListService.addIngredient(ingredient);
}
ngOnDestroy(){
this.subscription.unsubscribe();
}
editIngredientOnClick(index){
this.shoppingListService.startEditing.next(index);
}

}


