import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { LocationComponent } from "./location/location.component";

const routes: Routes = [
    { path: "", redirectTo: "/location", pathMatch: "full" },
    { path: "movies", component: MoviesComponent },
    { path: "location", component: LocationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
