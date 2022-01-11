import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject, of } from 'rxjs';
import { teamMock } from '../shared/mocks/team.mock';
import { FootballApiService } from '../shared/services/football-api.service';
import { TeamsPage } from './teams.page';

describe('TeamsPage', () => {
  let component: TeamsPage;
  let fixture: ComponentFixture<TeamsPage>;
  let footballApiServiceStub = jasmine.createSpyObj('FootballApiService', ['getTeamsByCompetition']);
  footballApiServiceStub.getTeamsByCompetition.and.returnValue(
    of({ count: 0, filters: {}, competition: { name: 'Bundesliga' }, season: {}, teams: [] })
  );
  const selectedTeamStub$ = new BehaviorSubject<any>({});
  footballApiServiceStub.selectedTeam$ = selectedTeamStub$;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TeamsPage],
        imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
        providers: [{ provide: FootballApiService, useValue: footballApiServiceStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(TeamsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get teams by competition', () => {
    console.log('a==>');
    console.log(component.competition$.value);
    expect(component.competition$.value.teams.length).toBe(0);
  });

  it('should navigate to team details', () => {
    let router: Router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.goToTeamDetails(teamMock.id, teamMock);
    expect(router.navigate).toHaveBeenCalledWith(['team-information/', teamMock.id]);
  });
});
