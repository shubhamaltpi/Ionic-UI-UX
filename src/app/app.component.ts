import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.requestPermission()
  }

  async requestPermission() {
    const havePermission = await Geolocation.checkPermissions()
    if (havePermission.location == 'granted') {
      const { latitude, longitude } = await this.getCoordinates()

    } else {
      await Geolocation.requestPermissions()
    }

  }

  async getCoordinates() {
    const { coords: { latitude, longitude } } = await Geolocation.getCurrentPosition();
    return { latitude, longitude }
  }

  async getLocation({ lat, long }) {
    // await https://www.feroeg.com/address?lat=19.0748&lon=72.8856
  }
}
