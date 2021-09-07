import { Component, OnInit } from '@angular/core';
import * as delay from 'delay';
import { StocksAPIService } from '../stocks-api.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  public cryptoDatas: Object;

  constructor(private data: StocksAPIService) { }

  async ngOnInit() {
    let cryptoSymbols = new Array("btc-usd", "eth-usd", "ltc-usd", "doge-usd");
    let cryptoArray = new Array<CryptoData>();

    for (let i = 0; i < cryptoSymbols.length; i++) {

      await delay(500);

      let cryptoData = {} as CryptoData;
      this.data.getStockBySymbol(cryptoSymbols[i])
        .then((response) => {
          response.json()
            .then((datas) => {
              cryptoData.Data = datas;
            });
        });

      this.data.getStockHistory(cryptoSymbols[i])
        .then((response) => {
          response.json()
            .then((datas) => {
              let todaysPrice = datas.prices[0].close;
              let oneYearPrice = datas.prices[365].close;
              let sixMonthPrice = datas.prices[182].close;
              let oneMonthPrice = datas.prices[30].close;

              cryptoData.OneYear = Math.round(((todaysPrice - oneYearPrice) / oneYearPrice) * 1000).toFixed(2);
              cryptoData.SixMonths = Math.round(((todaysPrice - sixMonthPrice) / sixMonthPrice) * 1000).toFixed(2);
              cryptoData.OneMonth = Math.round(((todaysPrice - oneMonthPrice) / oneMonthPrice) * 1000).toFixed(2);              
            });
        });
      cryptoArray.push(cryptoData);
    }
    this.cryptoDatas = cryptoArray;  
  }
}
interface CryptoData {
  Data: string;
  OneYear: string;
  SixMonths: string;
  OneMonth: string;
};
