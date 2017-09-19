import { Component, OnInit,OnDestroy,ViewChild} from '@angular/core';
import { Subscription} from 'rxjs/Subscription';
import { Ingredient} from '../../shared/ingredient.modal';
import { ShoppingListService} from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
editMode=false;
editedItemIndex;
editedItem:Ingredient;  
@ViewChild("f") slForm;


subscription:Subscription;
    
  constructor(private shoppingListService:ShoppingListService ) { }

  ngOnInit() {
  this.subscription=this.shoppingListService.startEditing.subscribe((index:number)=>{
  this.editMode=true;
  this.editedItemIndex=index;
  this.editedItem=this.shoppingListService.getIngredient(index);
  this.slForm.setValue({
  name:this.editedItem.name,
  amount:this.editedItem.amount
  })
  });
  }
  
  ngOnDestroy(){
  this.subscription.unsubscribe();
  }
 
  
  onAddItem(form){
  console.log(this.editMode);
  if(this.editMode===false)
  this.shoppingListService.addIngredient(new Ingredient(form.value.name,form.value.amount));
  else
  this.shoppingListService.editedIngredient(new Ingredient(form.value.name,form.value.amount),this.editedItemIndex);
  this.editMode=false;
  form.reset();
  }
  onClear(){
   console.log("clear");
  this.slForm.reset();
  this.editMode=false;
  }
  onDelete(){
  //console.log("delete");
  this.shoppingListService.deleteIngredient(this.editedItemIndex);
  this.editMode=false;
  this.slForm.reset();
  }
  

}


