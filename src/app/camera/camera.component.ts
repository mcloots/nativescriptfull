import { Component, OnInit } from '@angular/core';
import * as camera from "nativescript-camera";
import { Image } from "tns-core-modules/ui/image";
import * as application from "tns-core-modules/application";

@Component({
  selector: 'ns-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  moduleId: module.id,
})
export class CameraComponent implements OnInit {
  imageSource: string = "";
  constructor() { }

  ngOnInit() {
  }

  takePicture() {
    camera.requestPermissions().then(function () {
      //takepicture
      camera.takePicture().
        then((imageAsset) => {
          console.log("Result is an image asset instance");
          console.log(this.imageSource + " " + imageAsset.android)
          if (application.android) {
            this.imageSource = imageAsset.android as string;
          } else if (application.ios) {
            this.imageSource = imageAsset.ios  as string;
          }
        }).catch((err) => {
          console.log("Error -> " + err.message);
        });
    }, function (e) {
      console.log("Error: " + (e.message || e));
    });
  }
}
