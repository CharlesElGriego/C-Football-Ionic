import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competition } from '../interfaces/competition.interface';
import { Competitions } from '../interfaces/competitions.interface';

@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  private domainUrl = 'https://api.football-data.org/v2';
  constructor(private http: HttpClient) {}

  //#region   Public Methods
  getCompetition(id: string) {
    return this.http.get<Competition>(`${this.domainUrl}/competitions`);
  }

  getCompetitions(): Observable<Competitions> {
    return this.http.get<Competitions>(`${this.domainUrl}/competitions`);
  }
  //#endregion
}
