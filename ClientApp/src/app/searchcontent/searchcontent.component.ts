import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";
import { StocksAPIService } from '../stocks-api.service';

@Component({
  selector: 'app-searchcontent',
  templateUrl: './searchcontent.component.html',
  styleUrls: ['./searchcontent.component.css']
})
export class SearchcontentComponent implements OnInit {
  //var for passed value
  receivedMessage: string;
  passedChart: any;
  

  //var for button text
  btnText = "Add to Home";
  btnPressed = false;
  addBtn = "addBtn";

  //var for key data
  shortName: string;
  symbol: string;
  open: string;
  dHigh: string;
  dLow: string;
  pClose: string;
  averVol: string;
  f2High: string;
  f2Low: string;
  beta: string;
  regMPrice: string;
  exchangeName: string;
  mCap: string;

  //var values for chart
  high: any;
  low: any;
  stockDates: any;

  //actual chart var
  type: any;
  data: any;
  options: any;

  constructor(
    private sharedInput: SharedService,
    private sData: StocksAPIService,
  ) { }
  
  ngOnInit() {
    //this.forCSS(); //to test without api call
    this.receivedMessage = this.sharedInput.getMessage(); //set received message from previous component
    this.initEverything(); //api calls
    
  }

  initEverything() {
    this.getProfile();
    this.getChart();
  }

  //api call for key details
  getProfile() {
    this.sData.getProfile(this.receivedMessage)
      .then((response) => {
        response.json()
          .then((data) => {
            //set title var
            this.shortName = data.quoteType.shortName;
            this.symbol = data.symbol;
            //set key data
            this.open = data.summaryDetail.open.fmt;
            this.dHigh = data.summaryDetail.dayHigh.fmt;
            this.dLow = data.summaryDetail.dayLow.fmt;
            this.pClose = data.summaryDetail.previousClose.fmt;
            this.averVol = data.summaryDetail.averageVolume.longFmt;
            this.f2High = data.summaryDetail.fiftyTwoWeekHigh.fmt;
            this.f2Low = data.summaryDetail.fiftyTwoWeekLow.fmt;
            this.beta = data.summaryDetail.beta.fmt;
            this.regMPrice = data.price.regularMarketPrice.fmt;
            this.exchangeName = data.price.exchangeName;
            this.mCap = data.summaryDetail.marketCap.longFmt;
           
          });
      })
      .catch((err) => {
        console.log('Error generated: ${err}');
      });
  }

  //api call to get chart values
  getChart() {
    this.sData.getChart(this.receivedMessage)
      .then((response) => {
        response.json()
          .then((data) => {
            //set high, low, and timestamps
            this.high = data.chart.result[0].indicators.quote[0].high;
            this.low = data.chart.result[0].indicators.quote[0].low;
            let timeStamp = data.chart.result[0].timestamp;
            this.stockDates = [];
            //convert timestamps
            timeStamp.forEach((data) => {
              let jsdate = new Date(data * 1000);
              this.stockDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
            });
            //init chart
            this.initChart();
          });
      })
      .catch((err) => {
        console.log('Error generated: ${err}');
      });
  }

  //init chart once values needed are set
  initChart() {
    this.type = 'line';
    this.data = {
      labels: this.stockDates,
      datasets: [{ label: "Low", data: this.low, backgroundColor: ['#ff6769'] }, { label: "High", data: this.high, backgroundColor: ['#8aff98'] }],

    };
    this.options = {
      responsive: true,
      title: {
        display: true,
        text: '1D',
      },
      
    };
  }

  //func to add chart to home
  addHome() {
    if (!this.btnPressed) {
      console.log("button pressed");
      this.btnText = "Added!";
      this.addBtn = "addBtnActive";
      this.setChart();
      this.btnPressed = true;
    }
    else {
      console.log("unpressed");
      this.btnText = "Add to Home";
      this.addBtn = "addBtn";
      this.sharedInput.removeChart(this.symbol);
      this.btnPressed = false;
    }
  }

  //set chart in service
  setChart() {
    this.passedChart = {
      symbol: this.symbol,
      shortName: this.shortName,
      regMPrice: this.regMPrice,
      type: this.type,
      data: this.data,
      options: this.options,

    }
    this.sharedInput.setChart(this.passedChart);
}

  //function call to save api calls when testing component
  forCSS() {
    //title var
    this.shortName = "Short Name";
    this.symbol = "Symbol";
    //key data
    this.open = "test";
    this.dHigh = "test";
    this.dLow = "test";
    this.pClose = "test";
    this.averVol = "test";
    this.f2High = "test";
    this.f2Low = "test";
    this.beta = "test";
    this.regMPrice = "test";
    this.exchangeName = "test";
    this.mCap = "test";
    //chart var
    this.high = [2, 3, 4, 5, 6];
    this.low = [1, 2, 3, 4, 5];
    let timeStamp = [1007582741, 1625665772, 1070991691, 1131036227, 1298439891]
    this.stockDates = [];
    timeStamp.forEach((data) => {
      let jsdate = new Date(data * 1000);
      this.stockDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
    });

    //init chart
    this.initChart();
    console.log(this.sharedInput.getMessage());
  }

}
