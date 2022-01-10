import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CompetionsResponse } from '../shared/interfaces/responses/competitions-response.interface';
import { FootballApiService } from '../shared/services/football-api.service';
@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetitionsPage implements OnInit {
  competitions$ = new BehaviorSubject<CompetionsResponse>(null);

  constructor(private footballApiService: FootballApiService, private router: Router) {}

  ngOnInit(): void {
    this.getCompetitions();
  }

  //#region   Public Methods
  getCompetitions(): void {
    this.footballApiService.getCompetitions().subscribe((competitions) => {
      this.competitions$.next(competitions);
    });
  }

  goToTeamsByCompetition(id: number) {
    this.router.navigate(['teams/', id]);
  }
  //#endregion
}
