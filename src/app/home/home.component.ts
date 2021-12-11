import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';
import { Game } from './home.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  name = '';
  nameSearch = '';
  ratingSearch = 0;
  summarySearch = '';
  releaseSort = '';
  scoreSort = '';
  nameSort = '';
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getGame();
  }
  getGame() {
    this.apiService.getGames().subscribe((data: Game[]) => {
      console.log(data);
      this.games = data;
    });
  }

  changed(value: any) {
    console.log(value);
    this.apiService.getGames().subscribe((data: Game[]) => {
      console.log(data);
      if (value == 'releaseSort') {
        this.games = data.sort(
          (a: any, b: any) =>
            new Date(a.first_release_date).getTime() -
            new Date(b.first_release_date).getTime()
        );
      }
      if (value == 'scoreSort') {
        this.games = data.sort(
          (a: any, b: any) => 0 - (a.rating > b.rating ? -1 : 1)
        );
      }
      if (value == 'nameSort') {
        this.games = data.sort(
          (a: any, b: any) =>
            /*  new a.name - new b.name */
            0 - (a.name > b.name ? -1 : 1)
        );
      }
    });
  }
}
