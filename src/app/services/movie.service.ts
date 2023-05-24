import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://localhost:8081/api/v1.0/moviebooking/';

  constructor(private http: HttpClient) { }

  createMovie(movie: Movie | any): Observable<Movie> {
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Movie>(this.url+'admin/addmovie', movie,{headers});
  }
  getAllMovie(): Observable<Movie[]> {
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`

    });
  
    
    return this.http.get<Movie[]>(this.url+'all',{headers})
  }
  deleteMovie(id: any): Observable<any> {
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`

    });
    return this.http.delete<any>(`${this.url}admin/delete/${id}`,{headers});
  }
  updateMovie(movie: any, id: number): Observable<Movie> {
    return this.http.put<Movie>(`${this.url}/${id}`, movie);
  }
}
