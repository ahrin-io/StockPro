import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocksAPIService {
  key: string;
  constructor(private http: HttpClient) {
    this.key = "3299feba69msh9b7492b9072e217p1df24cjsn8e152f91b053";
  }

  getList() {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getChart(stock) {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=" + stock + "&range=1d&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getProfile(stock) {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=" + stock + "&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getAutoComplete(stock) {
    return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=" + stock + "&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getStockBySymbol(symbol: string) {
    return fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }

  getStockHistory(symbol: string) {
    return fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=${symbol}&region=US`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    });
  }
}
