import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TeamsByCompetitionResponse } from '../shared/interfaces/responses/teamsByCompetiton-response.interface';
import { FootballApiService } from '../shared/services/football-api.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsPage implements OnInit {
  competition$ = new BehaviorSubject<TeamsByCompetitionResponse>(null);

  constructor(private footballApiService: FootballApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getTeamsByCompetition(params['id']);
    });
  }

  //#region   Public Methods
  goToTeamDetails(id: number) {
    this.router.navigate(['team-information/', id]);
  }
  //#endregion

  //#region   Private Methods
  private getTeamsByCompetition(id: number): void {
    this.footballApiService.getTeamsByCompetition(id).subscribe((teams) => {
      this.competition$.next(teams);
    });
  }
  //#endregion
}
