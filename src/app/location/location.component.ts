import { Component, OnInit } from '@angular/core';
import * as geolocation from "nativescript-geolocation";

@Component({
  selector: 'ns-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  moduleId: module.id,
})
export class LocationComponent implements OnInit {
  location: Location;
  constructor() { }

  ngOnInit() {
    geolocation.isEnabled().then(function (isEnabled) {
      if (!isEnabled) {
        geolocation.enableLocationRequest().then(function () {
        }, function (e) {
          console.log("Error: " + (e.message || e));
        });
      } else {
      }
    }, function (e) {
      console.log("Error: " + (e.message || e));
    });
  }

  getLocation() {
    geolocation.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 }).
    then(function (loc) {
      if (loc) {
        alert(JSON.stringify(loc));
      }
    }, function (e) {
      console.log("Error: " + e.message);
    });
  }

}
