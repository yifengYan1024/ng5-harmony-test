import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ng5';
  array = [
    { coint: '澳元', price1: 0.1231231, price2: 1.1231233 },
    { coint: '加元', price1: 0.1231231, price2: 1.1231233 },
    { coint: '美元', price1: 0.1231231, price2: 1.1231233 },
    { coint: '港币', price1: 0.1231231, price2: 1.1231233 },
    { coint: '日元', price1: 0.1231231, price2: 1.1231233 },
    { coint: '新加坡元', price1: 0.1231231, price2: 1.1231233 },
    { coint: '欧元', price1: 0.1231231, price2: 1.1231233 },
    { coint: '英镑', price1: 0.1231231, price2: 1.1231233 }
  ];

  ngOnInit(): void {
    if ((window as any).jsBridge) {
      let param = {method:'hsbc',value:'I come from H5 message!',callback:'callH5Method'};
      (window as any).jsBridge.call(JSON.stringify(param));
    }
    // (window as any).callH5Method = this.callH5Method;
    // setTimeout(() => {
    //   {
    //     let param = {method:'hsbc',value:'I come from H5 click!',callback:'callH5Method'};
    //     (window as any).jsBridge.call(JSON.stringify(param));
    //    }
    // }, 1000);
  }

  callNative() {
    if ((window as any).jsBridge) {
      let param = {method:'hsbc',value:'I come from H5 click!',callback:'callH5Method'};
      (window as any).jsBridge.call(JSON.stringify(param));
    }
  }
}
