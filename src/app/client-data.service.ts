import { Injectable } from '@angular/core';
import { Client } from './client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  private clients: Client[] = [];
  private localStorageKey = 'clients';

  constructor() {
    this.loadClients(); // Carga los clientes al iniciar el servicio
  }

  // Carga los clientes desde localStorage
  private loadClients(): void {
    const savedClients = localStorage.getItem(this.localStorageKey);
    if (savedClients) {
      this.clients = JSON.parse(savedClients); // Convierte el JSON a un objeto de JS
    } else {
      // Si no hay datos, usa la lista por defecto
      this.clients = [
        {
          id: 1,
          name: 'Lysander Johnson',
          email: 'lysanders@example.com',
          status: 'Activo',
        },
        {
          id: 2,
          name: 'Helena Garcia',
          email: 'helenag@example.com',
          status: 'Inactivo',
        },
        {
          id: 3,
          name: 'Demetrius Patel',
          email: 'demetriusp@example.com',
          status: 'Activo',
        },
      ];
      this.saveClients(); // Guarda la lista inicial
    }
  }

  // Guarda los clientes en localStorage
  private saveClients(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.clients)); // Convierte el objeto a JSON
  }

  getClients(): Client[] {
    return this.clients;
  }

  addClient(client: Client): void {
    this.clients.push(client);
    this.saveClients();
  }

  deleteClient(id: number): void {
    this.clients = this.clients.filter((client) => client.id !== id);
    this.saveClients();
  }

  updateClient(updatedClient: Client): void {
    const index = this.clients.findIndex((client) => client.id === updatedClient.id);
    if (index !== -1) {
      this.clients[index] = updatedClient;
      this.saveClients();
    }
  }
}
