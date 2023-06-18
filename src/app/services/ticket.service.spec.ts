import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';
import { TicketComponent } from '../components/ticket/ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from '../components/home/home.component';
import { MovieService } from './movie.service';
import { of } from 'rxjs';

fdescribe('TicketService', () => {
  let service: TicketService;
  let comp:TicketComponent;
  let obj:any

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[TicketComponent],
      imports:
      [
        HttpClientTestingModule,
        HttpClientModule
      ],providers:[TicketService,TicketComponent]
    });
    service = TestBed.inject(TicketService);
    comp =TestBed.inject(TicketComponent)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get() from service',()=>{
    let response;
    let spy=spyOn(service,'getAllTicket').and.returnValue(of(response))
    expect(comp.getAllTicket()).toEqual(response)
  })
});
