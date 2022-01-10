import { Player } from '../player.interface';
import { Team } from '../team.interface';

export interface TeamInformationResponse extends Team {
  activeCompetitions: [];
  squad: Player[];
  squadByPosition: Map<string, Player[]>;
}
