import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   role:string|any=localStorage.getItem('roles')
   data:any[]=[]
   displayedColumns: string[] = ['movieId', 'movieName', 'totalSeat', 'totalSeatBooked','availableSeatsForBooking','action'];
   dataSource:Movie[]=[
   ];
  constructor(private movieService:MovieService,private userService:UserService) { }
  ngOnInit(): void {
    this.movieService.getAllMovie().subscribe(data=>{
          this.dataSource=data
    })
  }
  getData(event:any){
    console.log(event)
    this.movieService.deleteMovie(event).subscribe(data=>
      {
        console.log('Movie Deleted with id '+event)
      },
      error=>
      {
        console.log(error);
      })
  }
  getMovieName(event:any){
    localStorage.setItem('movieName',event)
    console.log(event)
  }
}

