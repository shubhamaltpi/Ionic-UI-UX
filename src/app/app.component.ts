import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'
import { GeoLocationAPIKEY } from 'src/app/appConfig/appConfig'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(@Inject(GeoLocationAPIKEY) public API_KEY: string, private http: HttpClient) { }

  ngOnInit() {
    this.requestPermission()
  }

  async requestPermission() {
    const havePermission = await Geolocation.checkPermissions()
    if (havePermission.location == 'granted') {
      const { latitude, longitude } = await this.getCoordinates()
      this.getLocation({ lat: latitude, long: longitude }).subscribe(res => console.log(res))
    } else {
      await Geolocation.requestPermissions()
    }
  }

  async getCoordinates() {
    const { coords: { latitude, longitude } } = await Geolocation.getCurrentPosition();
    return { latitude, longitude }
  }

  getLocation({ lat, long }) {
    return this.http.get(`https://api.geocodify.com/v2/reverse?api_key=${this.API_KEY}&lat=${lat}&lng=${long}`)
  }
}
