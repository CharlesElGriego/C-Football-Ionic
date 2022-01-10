import { Competition } from '../competition.interface';

export interface CompetionsResponse {
  count: number;
  filters: any;
  competitions: Competition[];
}
