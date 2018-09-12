import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.getNews();
  }

  getNews(){
    return this.newsService.getInfo();
  }

}
