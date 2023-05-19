import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  base_Url='http://localhost:8081/api/v1.0/moviebooking/'


  constructor(private http:HttpClient) { }

  getAllTicket():Observable<any>{
  return this.http.get<any>(this.base_Url+'ticket/all')
  }
  bookTicket(data:any,movieName:any):Observable<any>{
    return this.http.post<any>(`${this.base_Url}${movieName}/book`,data)
    }
}
