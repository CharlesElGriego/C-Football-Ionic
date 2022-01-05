export interface Competition {
  id: number;
  area: {
    id: number;
    name: string;
    countryCode: string;
    ensignUrl: string;
  };
  name: string;
  code: string;
  emblemUrl: string;
  plan: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string;
  };
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}
