import { Injectable } from '@angular/core';
import { Client } from './client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  private clients: Client[] = [
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
    {
      id: 4,
      name: 'Hermia Chen',
      email: 'hermiac@example.com',
      status: 'Pendiente',
    },
  ];

  constructor() {}
  getClients(): Client[] {
    return this.clients;
  }
}
