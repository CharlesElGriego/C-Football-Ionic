import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { sortByName } from '../helpers/array-helper';
import { CompetionsResponse } from '../interfaces/responses/competitions-response.interface';
import { TeamInformationResponse } from '../interfaces/responses/teamInformationResponse.interface';
import { TeamsByCompetitionResponse } from '../interfaces/responses/teamsByCompetiton-response.interface';
@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  private domainUrl = 'https://api.football-data.org/v2';
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
    return this.http.get<TeamInformationResponse>(`${this.domainUrl}/teams/${id}`);
  }

  getCompetitions(): Observable<CompetionsResponse> {
    return this.http.get<CompetionsResponse>(`${this.domainUrl}/competitions?plan=TIER_ONE`).pipe(
      map((response) => {
        response.competitions.sort(sortByName);
        return response;
      })
    );
  }
  //#endregion
}
