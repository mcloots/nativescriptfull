import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";

const routes: Routes = [
    { path: "", redirectTo: "/movies", pathMatch: "full" },
    { path: "movies", component: MoviesComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
