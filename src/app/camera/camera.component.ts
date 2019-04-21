import { Component, OnInit } from '@angular/core';
import * as camera from "nativescript-camera";
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'ns-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  moduleId: module.id,
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  takePicture() {
    camera.requestPermissions().then(function () {
      //takepicture
      camera.takePicture().
        then((imageAsset) => {
          console.log("Result is an image asset instance");
          var image = new Image();
          image.src = imageAsset;
        }).catch((err) => {
          console.log("Error -> " + err.message);
        });
    }, function (e) {
      console.log("Error: " + (e.message || e));
    });
  }
}
