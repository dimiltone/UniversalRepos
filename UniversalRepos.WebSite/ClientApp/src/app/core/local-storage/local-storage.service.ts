import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export const AUTH_KEY = 'AUTH';
export const THEME_KEY = 'THEME';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  static setItem(key: string, value: any) {
    localStorage.setItem(`${environment.localStoragePrefix}${key}`, JSON.stringify(value));
  }

  static getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${environment.localStoragePrefix}${key}`));
  }
}
