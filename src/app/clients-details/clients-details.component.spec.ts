import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDetails } from './clients-details';

describe('ClientsDetails', () => {
  let component: ClientsDetails;
  let fixture: ComponentFixture<ClientsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
