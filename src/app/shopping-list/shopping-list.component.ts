import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Side Pork', 1),
    new Ingredient('Potato', 4),
    new Ingredient('Sour Cabage', 2),
  ];

  constructor() { }

  ngOnInit() {
  }

}
