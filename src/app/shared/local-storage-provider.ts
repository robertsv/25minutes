import {InjectionToken} from '@angular/core';

export const LocalStorageToken = new InjectionToken('localStorage');

export function localStorageProvider() {
  return localStorage;
}
