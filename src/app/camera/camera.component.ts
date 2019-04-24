import { Component, OnInit } from '@angular/core';
import * as camera from "nativescript-camera";
import { Image } from "tns-core-modules/ui/image";
import * as application from "tns-core-modules/application";
import * as imagepicker from "nativescript-imagepicker";

@Component({
  selector: 'ns-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  moduleId: module.id,
})
export class CameraComponent implements OnInit {
  public imageSource: string = "";

  constructor() { }

  ngOnInit() {
  }

  takePicture() {
    camera.requestPermissions().then(function () {
      //takepicture
      camera.takePicture().
        then((imageAsset) => {
          console.log("Result is an image asset instance");
          if (application.android) {
            alert(imageAsset.android as string);
          } else if (application.ios) {
            alert(imageAsset.ios as string);
          }
        }).catch((err) => {
          console.log("Error -> " + err.message);
        });
    }, function (e) {
      console.log("Error: " + (e.message || e));
    });
  }

  pickImage() {
    let context = imagepicker.create({
      mode: "single" // use "multiple" for multiple selection
    });

    context
      .authorize()
      .then(function () {
        return context.present();
      })
      .then(function (selection) {
        selection.forEach(function (selected) {
          // process the selected image
        });
        console.log(selection);
      }).catch(function (e) {
        // process error
      });
  }
}
