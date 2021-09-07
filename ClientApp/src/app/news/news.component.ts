import { Component, OnInit } from '@angular/core';
import { StocksAPIService } from '../stocks-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Object;

  constructor(private data: StocksAPIService) { }

  ngOnInit() {
    this.data.getList()
      .then((response) => {
        response.json()
          .then((data) => {
            this.news = data.items.result;
            console.log(this.news);
            console.log(data);
          });
      })
      .catch((err) => {
        console.log('Error geenrted: ${err}');
      });
  }

}
