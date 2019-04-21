import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from './movie';

@Component({
  selector: 'ns-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  moduleId: module.id
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  searchTitle: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  search() {
    this.moviesService.getMovie(this.searchTitle).subscribe((result) => {
      this.movies = result;
    }, (error) => {
      console.log(error);
    });
  }

  public onItemTap(args) {
    console.log("Item Tapped at cell index: " + args.index);
  }

}
