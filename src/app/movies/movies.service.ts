import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable(
    // Instead of providers array you can use provideIn
    // Learn more https://angular.io/guide/providers
    // {
    //     providedIn: "root"
    // }
)
export class MoviesService {
    private serverUrl = "http://www.omdbapi.com/?apikey=48cc3813&t=";

    constructor(private http: HttpClient) { }

    getMovie(title: string) {
        //let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl + title/*, { headers: headers }*/);
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
         });

        return headers;
    }
}