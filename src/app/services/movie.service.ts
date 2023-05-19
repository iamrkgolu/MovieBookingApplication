import { HttpClient } from '@angular/common/http';
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
    return this.http.post<Movie>(this.url+'admin/addmovie', movie);
  }
  getAllMovie(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url+'all')
  }
  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.url}admin/delete/${id}`);
  }
  updateMovie(movie: any, id: number): Observable<Movie> {
    return this.http.put<Movie>(`${this.url}/${id}`, movie);
  }
}
