import { Component, OnInit } from '@angular/core';
import { Article } from './articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  article: Article = {
    id: 1,
    title: 'Globant now owns Belatrix',
    description: 'They bought it'
  };

  constructor() { }

  ngOnInit() {
  }

}
