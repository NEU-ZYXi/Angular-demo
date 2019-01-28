import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test1', 'test desc1', 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
    new Recipe('test2', 'test desc2', 'https://www.wonderplugin.com/videos/demo-image0.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
