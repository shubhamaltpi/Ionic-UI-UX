import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
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
      localStorage.setItem('loc', JSON.stringify({ lat: latitude, lng: longitude }))
    } else {
      await Geolocation.requestPermissions()
    }
  }

  async getCoordinates() {
    const { coords: { latitude, longitude } } = await Geolocation.getCurrentPosition();
    return { latitude, longitude }
  }
}
