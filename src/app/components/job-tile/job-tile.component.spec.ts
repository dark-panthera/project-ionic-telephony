import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobTileComponent } from './job-tile.component';

describe('JobTileComponent', () => {
  let component: JobTileComponent;
  let fixture: ComponentFixture<JobTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTileComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
