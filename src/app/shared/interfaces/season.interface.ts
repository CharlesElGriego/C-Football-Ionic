import { Winner } from './winner.interface';

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: Winner;
}
