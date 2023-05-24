import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  base_Url='http://localhost:8081/api/v1.0/moviebooking/'


  constructor(private http:HttpClient) { }

  getAllTicket():Observable<any>{
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`

    });
    
  return this.http.get<any>(this.base_Url+'ticket/all',{headers})
  }
  bookTicket(data:any,movieName:any):Observable<any>{
    return this.http.post<any>(`${this.base_Url}${movieName}/book`,data)
    }
}
