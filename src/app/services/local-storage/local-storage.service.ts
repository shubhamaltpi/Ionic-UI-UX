import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  async setState(key: string, value: string) {
    await Preferences.set({ key, value });
  };

  async getState(key: string) {
    await Preferences.get({ key })
  }

  async removeState(key: string) {
    await Preferences.remove({ key })
  }
}
