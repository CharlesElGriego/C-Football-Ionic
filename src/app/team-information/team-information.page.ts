import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TeamInformationResponse } from '../shared/interfaces/responses/teamInformationResponse.interface';
import { FootballApiService } from '../shared/services/football-api.service';

@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.page.html',
  styleUrls: ['./team-information.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationPage implements OnInit {
  teamInfo$ = new BehaviorSubject<TeamInformationResponse>(null);
  selectedTeam$ = this.footballApiService.selectedTeam$;
  constructor(private footballApiService: FootballApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getTeamInformation(params['id']);
    });
  }
  ngOnDestroy(): void {
    this.footballApiService.selectedTeam$.next(null);
  }

  //#region   Private Methods
  private getTeamInformation(id: number): void {
    this.footballApiService.getTeamInfo(id).subscribe((team) => {
      this.teamInfo$.next(team);
    });
  }
  //#endregion
}
