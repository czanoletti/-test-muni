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
    let articles = this.newService.getInfo();
    this.route.params.subscribe(params => {

      this.id = +params['id'];
      this.article = articles[this.id];

      window.scrollTo(0, 0);
    })
    // this.article = this.getArticle();
    // this.sub = this.route.params
  }

  getArticle(){


  }



}
