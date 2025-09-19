import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../client-data-service';
import { Client } from '../client.interface';
import { ClientListComponent } from '../client-list.component/client-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ClientListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientDataService: ClientDataService) {} //es la inyección de dependencias. Le dice a Angular: "Dame una instancia de ClientDataService".

  ngOnInit(): void {
    this.clients = this.clientDataService.getClients();
  }
}
