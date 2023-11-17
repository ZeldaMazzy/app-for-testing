import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getDetails(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data");
      }, 1500);
    });
  }
}
