import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../client-data.service';
import { Client } from '../client.interface';
import { ClientListComponent } from '../client-list/client-list.component';
import { ClientsDetailsComponent } from '../client-details/client-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ClientListComponent, ClientListComponent, ClientsDetailsComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  clients: Client[] = [];
  selectedClient: Client | null = null;

  constructor(private clientDataService: ClientDataService) {}

  ngOnInit(): void {
    this.clients = this.clientDataService.getClients();
  }

  onClientSelected(client: Client): void {
    this.selectedClient = client;
  }
}
