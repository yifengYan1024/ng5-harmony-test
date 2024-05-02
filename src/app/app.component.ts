import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  constructor(
    private router: Router
  ) {
  }
  ngOnInit(): void {
    if ((window as any).jsBridge) {
      let param = {method:'hsbc',value:'I come from H5 message!',callback:'callH5Method'};
      (window as any).jsBridge.call(JSON.stringify(param));
    }
    (window as any).callH5Method = this.callH5Method;
    this.router.navigate(['login']);
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

  callH5Method(result) {
    console.info('from native: '+result);
    alert(result);
    return "Call H5 function";
  }
}
