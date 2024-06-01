import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudApiService {

  constructor(private http: HttpClient) { }

  // Example function to fetch data from the API
  getHomedata(): Observable<any> {
    return this.http.get("https://us-central1-jewelry-fe26b.cloudfunctions.net/app/home", {});
  }
}
