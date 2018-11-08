import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Jule Ribbe', 'Embedded Ribbe', 'https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_574,q_80,w_945/mzlmdlc0d4q0whfu4tyw.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
