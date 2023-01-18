import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeComponent } from './kee.component';

describe('KeeComponent', () => {
  let component: KeeComponent;
  let fixture: ComponentFixture<KeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
