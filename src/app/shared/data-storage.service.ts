import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataStorageService {

constructor(private http:Http) { }
storeRecipe(recipes:any[]){
return this.http.put("https://ng-recipe-book-c5fb0.firebaseio.com/recipe.json",recipes);
}

fetchRecipe(){
return this.http.get("https://ng-recipe-book-c5fb0.firebaseio.com/recipe.json")

}

}
