import { Injectable } from '@angular/core';
import {UserModel} from '../../Models/UserModel';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
