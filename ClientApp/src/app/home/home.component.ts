import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //var for chart
  showCharts = false;
  charts: any;

  constructor(private sharedInput: SharedService) { }

  ngOnInit() {
    this.checkIfAvailable();
  }

  //check if there are any charts to display
  checkIfAvailable() {
    this.charts = this.sharedInput.getChart();
    if (this.charts === undefined || this.charts.length == 0) {
      this.showCharts = false;
    }
    else {
      this.showCharts = true;
    }
  }

  //removing chart when button is pressed
  removeQuote(symbol) {
    this.charts = this.sharedInput.removeChart(symbol);
    this.checkIfAvailable();
  }
}
