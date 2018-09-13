import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.css']
})
export class NewsDisplayComponent implements OnInit {

  article: any;
  id:number;
  private sub:any;

  constructor(private route: ActivatedRoute,
              private newService: NewsService) { }

  ngOnInit() {
    this.article = this.getArticle();
    // this.sub = this.route.params
  }

  getArticle(){
    let articles = this.newService.getInfo();
    return articles[this.route.params.value.id];
  }



}
