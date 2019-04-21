import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { LocationComponent } from "./location/location.component";
import { CameraComponent } from "./camera/camera.component";

const routes: Routes = [
    { path: "", redirectTo: "/camera", pathMatch: "full" },
    { path: "movies", component: MoviesComponent },
    { path: "location", component: LocationComponent },
    { path: "camera", component: CameraComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
