import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ZBar, ZBarOptions } from '@ionic-native/zbar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private zbar: ZBar
    ) {

  }

  //    // 扫描
//    scan() {
//     let options: ZBarOptions = {
//       flash: 'off',
//       text_title: '扫码',
//       text_instructions: '请将二维码置于红线中央',
//       camera: "front" || "back",
//       drawSight: true
//     };

//     this.zbar.scan(options)
//       .then(result => {
//         alert("结果：" + result); // Scanned code
//         // const browser = this.iab.create(result);
//       })
//       .catch(error => {
//         alert(error); // Error message
//       });
// }

}
