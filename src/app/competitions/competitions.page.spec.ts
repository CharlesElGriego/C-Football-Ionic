import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { FootballApiService } from '../shared/services/football-api.service';
import { CompetitionsPage } from './competitions.page';
describe('CompetitionsPage', () => {
  let component: CompetitionsPage;
  let fixture: ComponentFixture<CompetitionsPage>;
  let footballApiServiceStub = jasmine.createSpyObj('FootballApiService', ['getCompetitions']);
  footballApiServiceStub.getCompetitions.and.returnValue(of({ competitions: [], count: 0, filters: [] }));
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CompetitionsPage],
        imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
        providers: [{ provide: FootballApiService, useValue: footballApiServiceStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(CompetitionsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get empty competitions list from mock service', () => {
    expect(component.competitions$.value.competitions.length).toBe(0);
  });

  it('should navigate to teams by competition', () => {
    let router: Router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.goToTeamsByCompetition(2000);
    expect(router.navigate).toHaveBeenCalledWith(['teams/', 2000]);
  });
});
