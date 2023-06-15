import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url_register = 'https://oeu3mwsy36.execute-api.us-west-2.amazonaws.com/myGateway/authorization/register'
  url_login = 'https://oeu3mwsy36.execute-api.us-west-2.amazonaws.com/myGateway/authorization'
  url_forget = 'https://oeu3mwsy36.execute-api.us-west-2.amazonaws.com/myGateway/'

  local_url_register='http://localhost:8081/auth/v1.0/addUser'
  local_url_login='http://localhost:8081/auth/v1.0/login'
  local_url_forget='http://localhost:8081/auth/v1.0/forgetPassword/'

  constructor(private http: HttpClient) { }

  registerUser(user: User | any): Observable<User> {
    return this.http.post<User>(this.local_url_register, user);
  }

  loginUser(userDetails: any): Observable<any> {

    let headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    return this.http.post<loginResponse>(this.local_url_login, userDetails);
  }
  forgetPassword(userId: any, user: any): Observable<any> {
    return this.http.put<any>(`${this.local_url_forget}${userId}`, user);
  }


}
interface loginResponse {
  Message: any
  Token: any
}
