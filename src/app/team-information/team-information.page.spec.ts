import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject, of } from 'rxjs';
import { FootballApiService } from '../shared/services/football-api.service';
import { TeamInformationPage } from './team-information.page';
describe('TeamInformationPage', () => {
  let component: TeamInformationPage;
  let fixture: ComponentFixture<TeamInformationPage>;
  let footballApiServiceStub = jasmine.createSpyObj('FootballApiService', ['getTeamInfo']);
  footballApiServiceStub.getTeamInfo.and.returnValue(of({ id: 57, squad: [] }));
  const selectedTeamStub$ = new BehaviorSubject<any>({});
  footballApiServiceStub.selectedTeam$ = selectedTeamStub$;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TeamInformationPage],
        imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
        providers: [{ provide: FootballApiService, useValue: footballApiServiceStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(TeamInformationPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should get team info', () => {
    fixture.detectChanges();
    expect(component.teamInfo$.value.id).toBe(57);
  });
});
