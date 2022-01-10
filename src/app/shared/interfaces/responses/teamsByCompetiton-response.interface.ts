import { Competition } from '../competition.interface';
import { Season } from '../season.interface';
import { Team } from '../team.interface';

export interface TeamsByCompetitionResponse {
  count: number;
  filters: any;
  competition: Competition;
  season: Season;
  teams: Team[];
}
