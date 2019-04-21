import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'ns-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  moduleId: module.id,
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovie("titanic").subscribe((result) => {
      alert(result);
    }, (error) => {
      console.log(error);
    });


  }

}
