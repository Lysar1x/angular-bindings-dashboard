import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../client-data.service';
import { Client } from '../client.interface';
import { ClientListComponent } from '../client-list/client-list.component';
import { ClientsDetailsComponent } from '../client-details/client-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ClientListComponent, ClientsDetailsComponent, CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  clients: Client[] = [];
  selectedClient: Client | null = null;
  newClientName: string = '';
  editingClient: Client | null = null;

  constructor(private clientDataService: ClientDataService) {}

  ngOnInit(): void {
    this.clients = this.clientDataService.getClients();
  }

  onClientSelected(client: Client): void {
    this.selectedClient = client;
  }

  addClient(): void {
    if (this.newClientName.trim()) {
      const newClient: Client = {
        id: this.clients.length + 1,
        name: this.newClientName,
        email: `${this.newClientName.toLowerCase().replace(' ', '')}@example.com`,
        status: 'Activo',
      };
      this.clientDataService.addClient(newClient);
      this.clients = this.clientDataService.getClients();
      console.log('Nuevo cliente agregado:', newClient);
      this.newClientName = '';
    }
  }

  onClientDeleted(id: number): void {
    this.clientDataService.deleteClient(id);
    this.clients = this.clientDataService.getClients();
  }
  onClientToEdit(client: Client): void {
    this.editingClient = { ...client }; // Crea una copia del cliente para evitar modificar el original
  }

  saveChanges(): void {
    if (this.editingClient) {
      this.clientDataService.updateClient(this.editingClient);
      this.clients = this.clientDataService.getClients();
      this.editingClient = null;
    }
  }

  cancelEdit(): void {
    this.editingClient = null;
  }
}
