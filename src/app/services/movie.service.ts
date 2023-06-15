import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://52.32.134.149:8081/api/v1.0/moviebooking/';
  getAllMovie_url='https://oeu3mwsy36.execute-api.us-west-2.amazonaws.com/myGateway/movieresource'
  createMovie_url='https://oeu3mwsy36.execute-api.us-west-2.amazonaws.com/myGateway/movieresource'
  deleteMovie_url=' https://oeu3mwsy36.execute-api.us-west-2.amazonaws.com/myGateway/'

  getAllMovieLocal_url='http://localhost:8081/api/v1.0/moviebooking/all'
  createMovieLocal_url='http://localhost:8081/api/v1.0/moviebooking/admin/addmovie'
  deleteMovieLocal_url='http://localhost:8081/api/v1.0/moviebooking/admin/delete/'
  searchMovieLocal_url='http://localhost:8081/api/v1.0/moviebooking/movies/searchByName/'
  constructor(private http: HttpClient) { }

  createMovie(movie: Movie | any): Observable<Movie> {
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Movie>(this.createMovieLocal_url, movie,{headers});
  }
  getAllMovie(): Observable<Movie[]> {
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`

    });


    return this.http.get<Movie[]>(this.getAllMovieLocal_url,{headers})
  }
  deleteMovie(id: any): Observable<any> {
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`

    });
    return this.http.delete<any>(`${this.deleteMovieLocal_url}${id}`,{headers});
  }
  updateMovie(movie: any, id: number): Observable<Movie> {
    return this.http.put<Movie>(`${this.url}/${id}`, movie);
  }

  searchMovieById(id:any):Observable<any>{
    return this.http.get<any>(`${this.searchMovieLocal_url}${id}`)
  }
}
