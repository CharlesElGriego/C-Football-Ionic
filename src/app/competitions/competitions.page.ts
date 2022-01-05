import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { sortByName } from '../shared/helpers/array-helper';
import { Competitions } from '../shared/interfaces/competitions.interface';
import { FootballApiService } from '../shared/services/football-api.service';
@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetitionsPage implements OnInit {
  competitions$ = new BehaviorSubject<Competitions>(null);

  constructor(private footballApiService: FootballApiService) {}

  ngOnInit(): void {
    this.getCompetitions();
  }

  //#region   Public Methods
  getCompetitions(): void {
    this.footballApiService.getCompetitions().subscribe((competitions) => {
      competitions.competitions.sort(sortByName);
      this.competitions$.next(competitions);
    });
  }
  //#endregion
}
