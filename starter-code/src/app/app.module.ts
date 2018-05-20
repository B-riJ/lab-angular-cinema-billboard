import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 // added routes
import { MovieService } from './services/movie.service'; // fix this
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
import { RouterModule, Routes } from "@angular/router";



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'movies/:id', component: MyMovieComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  //beware of imports already including BrowserModule (lesson-Routing)
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  //added MovieSercie
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
