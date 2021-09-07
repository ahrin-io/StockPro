import { Component, OnInit } from '@angular/core';
import { StocksAPIService } from '../stocks-api.service';

@Component({
  selector: 'app-Metals',
  templateUrl: './metals.component.html',
  styleUrls: ['./metals.component.css']
})
export class MetalsComponent implements OnInit {

  public metalDatas: Object;

  constructor(private data: StocksAPIService) { }

  ngOnInit() {
    var metalSymbols = new Array("PL=F","GC=F","SI=F","HG=F");
    var metalArray = new Array<string>();            
    for (var i = 0; i < metalSymbols.length; i++) {
      this.data.getStockBySymbol(metalSymbols[i])
        .then((response) => {
          response.json()
            .then((datas) => {
              metalArray.push(datas);
              console.log(datas);
            });
        });
    }

    this.metalDatas = metalArray;
  }
}
