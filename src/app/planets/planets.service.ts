import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http
      .get('https://images-api.nasa.gov/search?q=saturn&media_type=image')
      .pipe(
        map((data: any) => {
          const arr = [];
          for (let i = 0; i < 12; i++) {
            arr.push(data.collection.items[i].links[0].href);
          }
          return arr;
        })
      );
  }
}
