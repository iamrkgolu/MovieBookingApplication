import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  base_Url='http://52.32.134.149:8081/api/v1.0/moviebooking/'
  getAllTicket_url='https://oeu3mwsy36.execute-api.us-west-2.amazonaws.com/myGateway/ticket'
  bookTicket_url=' https://oeu3mwsy36.execute-api.us-west-2.amazonaws.com/myGateway/'

  getAllTicketLocal_url='http://localhost:8081/api/v1.0/moviebooking/ticket/all'
  bookTicketLocal_url='http://localhost:8081/api/v1.0/moviebooking/'

  constructor(private http:HttpClient) { }

  getAllTicket():Observable<any>{
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`

    });

  return this.http.get<any>(this.getAllTicketLocal_url,{headers})
  }
  bookTicket(data:any,movieName:any):Observable<any>{
    return this.http.post<any>(`${this.bookTicketLocal_url}${movieName}/book`,data)
    }
}
