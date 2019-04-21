import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./movie";
import { map } from 'rxjs/operators';

@Injectable(
    // Instead of providers array you can use provideIn
    // Learn more https://angular.io/guide/providers
    // {
    //     providedIn: "root"
    // }
)
export class MoviesService {
    private serverUrl = "http://www.omdbapi.com/?apikey=48cc3813&s=";

    constructor(private http: HttpClient) { }

    getMovie(title: string) : Observable<Movie[]> {
        return this.http.get(this.serverUrl + title)
        .pipe(
            map((search: any) => {
                return search.Search;
            })
        );
    }
}