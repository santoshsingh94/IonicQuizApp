import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  currentUser: String;
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000';
  saveUser(data) {
    this.currentUser = data.value.name;
    return this.http.post(this.baseUrl + '/api/postuser', data.value);
  }

  mobileEntry(data) {
    console.log(data.value);
    return this.http.post(this.baseUrl + '/api/MobileEntry', data.value);
  }
}
