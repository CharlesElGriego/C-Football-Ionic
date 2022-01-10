import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { sortByName } from '../helpers/array-helper';
import { Player } from '../interfaces/player.interface';
import { CompetionsResponse } from '../interfaces/responses/competitions-response.interface';
import { TeamInformationResponse } from '../interfaces/responses/teamInformationResponse.interface';
import { TeamsByCompetitionResponse } from '../interfaces/responses/teamsByCompetiton-response.interface';
import { Team } from '../interfaces/team.interface';
@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  private domainUrl = 'https://api.football-data.org/v2';
  selectedTeam$ = new BehaviorSubject<Team>(null);
  constructor(private http: HttpClient) {}

  //#region   Public Methods
  getTeamsByCompetition(id: number): Observable<TeamsByCompetitionResponse> {
    return this.http.get<TeamsByCompetitionResponse>(`${this.domainUrl}/competitions/${id}/teams`).pipe(
      map((response) => {
        response.teams.sort(sortByName);
        return response;
      })
    );
  }

  getTeamInfo(id: number): Observable<TeamInformationResponse> {
    return this.http.get<TeamInformationResponse>(`${this.domainUrl}/teams/${id}`).pipe(
      map((response) => {
        response.squadByPosition = this.transformSquad(response.squad);
        return response;
      })
    );
  }

  getCompetitions(): Observable<CompetionsResponse> {
    return this.http.get<CompetionsResponse>(`${this.domainUrl}/competitions?plan=TIER_ONE`).pipe(
      map((response) => {
        response.competitions.sort(sortByName);
        return response;
      })
    );
  }

  private transformSquad(squadPayload: Player[]) {
    const playerPosition = new Map<string, Player[]>();
    const squad = squadPayload;

    squad.forEach((player) => {
      if (playerPosition.has(player.position)) {
        let players = [...playerPosition.get(player.position)];
        players.push(player);
        playerPosition.set(player.position, players.sort(sortByName));
      } else {
        let players = [];
        players.push(player);
        playerPosition.set(player.position, players.sort(sortByName));
      }
    });

    return playerPosition;
  }
  //#endregion
}
