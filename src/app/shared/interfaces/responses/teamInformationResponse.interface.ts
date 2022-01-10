import { Team } from '../team.interface';

export interface TeamInformationResponse extends Team {
  activeCompetitions: [];
  squad: string[];
}
