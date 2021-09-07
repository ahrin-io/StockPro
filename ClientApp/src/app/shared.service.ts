import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message: string;
  charts = new Array();

  constructor() { }

  setMessage(mess) {
    this.message = mess;
  }

  getMessage() {
    return this.message;
  }

  setChart(ch) {
    this.charts=this.removeChart(ch.symbol);
    this.charts.push(ch);
  }

  getChart() {
    return this.charts;
  }

  removeChart(symbol) {
    const result = this.charts.filter(item => item.symbol != symbol);
    this.charts = result;
    return this.charts;
  }
}
