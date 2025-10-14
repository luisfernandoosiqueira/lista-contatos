import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatodetailsComponent } from './contatodetails.component';

describe('ContatodetailsComponent', () => {
  let component: ContatodetailsComponent;
  let fixture: ComponentFixture<ContatodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatodetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
